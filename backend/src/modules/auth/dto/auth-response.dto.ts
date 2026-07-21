import { UserRole } from '../enums/user-role.enum';

export class UserPayloadDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
}

export class AuthResponseDto {
  user: UserPayloadDto;
  accessToken: string;
}
