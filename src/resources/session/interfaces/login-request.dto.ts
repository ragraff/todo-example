import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * The DTO representation of a login request.
 */
export class LoginRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}
