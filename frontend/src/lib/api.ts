import {
  AuthResponse,
  LoginDto,
  PlayerOnboardingDto,
  RecruiterOnboardingDto,
  RegisterDto,
  User,
} from '@/types/auth';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const TOKEN_KEY = 'futlink_token';

/**
 * Token Storage Helpers
 */
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
  }
};

/**
 * Generic API Fetch Wrapper
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const response = await fetch(`${API_BASE_URL}${cleanEndpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage =
      Array.isArray(data.message)
        ? data.message.join(', ')
        : data.message || `Request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }

  return data as T;
}

/**
 * Authentication Endpoints API Service
 */
export const authApi = {
  async register(data: RegisterDto): Promise<AuthResponse> {
    const result = await apiFetch<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (result.accessToken) {
      setToken(result.accessToken);
    }
    return result;
  },

  async login(data: LoginDto): Promise<AuthResponse> {
    const result = await apiFetch<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (result.accessToken) {
      setToken(result.accessToken);
    }
    return result;
  },

  async getMe(): Promise<User> {
    return apiFetch<User>('/auth/me', {
      method: 'GET',
    });
  },

  async onboardPlayer(data: PlayerOnboardingDto): Promise<AuthResponse> {
    const result = await apiFetch<AuthResponse>('/auth/onboarding/player', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    if (result.accessToken) {
      setToken(result.accessToken);
    }
    return result;
  },

  async onboardRecruiter(data: RecruiterOnboardingDto): Promise<AuthResponse> {
    const result = await apiFetch<AuthResponse>('/auth/onboarding/recruiter', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    if (result.accessToken) {
      setToken(result.accessToken);
    }
    return result;
  },

  logout(): void {
    removeToken();
  },
};
