import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: 'La contraseña actual es obligatoria.' })
  @IsString()
  oldPassword: string;

  @IsNotEmpty({ message: 'La nueva contraseña es obligatoria.' })
  @IsString()
  @MinLength(8, { message: 'La nueva contraseña debe tener al menos 8 caracteres.' })
  newPassword: string;
}
