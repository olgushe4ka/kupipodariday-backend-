import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  username?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  avatar?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  about?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;
}
