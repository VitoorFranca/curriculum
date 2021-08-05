import { IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
  
  @IsString({ each: true })
  curriculums: string[];

  @IsString()
  readonly role?: string;

  @IsString()
  readonly status?: string;

  @IsBoolean()
  readonly isPremium?: boolean;

  @IsDate()
  readonly createdAt?: Date;

  @IsDate()
  public updatedAt?: Date;
}