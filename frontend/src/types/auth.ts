export enum UserRole {
  PLAYER = 'PLAYER',
  RECRUITER = 'RECRUITER',
}

export interface User {
  isOnboarded: any;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error?: string;
}
export interface PlayerOnboardingDto {
  birthDate?: string;
  nationality?: string;
  location?: string;
  height?: number;
  weight?: number;
  foot?: string;
  biotype?: string;
  primaryPosition?: string;
  specificRole?: string;
  secondaryRole?: string;
  contractStatus?: string;
  currentClub?: string;
}
export interface RecruiterOnboardingDto {
  institutionId?: string;
  institutionName?: string;
  institutionType?: string;
  location?: string;
  divisionLeague?: string;
  website?: string;
  logoUrl?: string;
  title?: string;
}
