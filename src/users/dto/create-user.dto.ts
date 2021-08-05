import { IsEmail, IsString, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
  
  @IsOptional()
  @IsString({ each: true })
  curriculums: string[];

  @IsOptional()
  @IsString()
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly status?: string;

  @IsOptional()
  @IsBoolean()
  readonly isPremium?: boolean;

  @IsOptional()
  @IsDateString()
  readonly createdAt?: Date;

  @IsOptional()
  @IsDateString()
  public updatedAt?: Date;
}