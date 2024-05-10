import { IsEmail, IsEmpty, IsOptional, MinLength } from "class-validator";


export class CreateTeacherDto {
  @IsEmpty()
  @MinLength(4)
  name: string;

  @IsEmpty()
  @MinLength(6)
  @IsEmail()
  email: string;
}

export class UpdateTeacherDto {
  @IsOptional()
  @MinLength(4)
  name: string;

  @IsOptional()
  @MinLength(6)
  @IsEmail()
  email: string;
}