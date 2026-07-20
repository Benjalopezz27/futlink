import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enums/user-role.enum';

export class RegisterDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsEnum(UserRole, { message: 'Role must be either PLAYER or RECRUITER' })
  @IsNotEmpty({ message: 'Role is required' })
  role: UserRole;
}
