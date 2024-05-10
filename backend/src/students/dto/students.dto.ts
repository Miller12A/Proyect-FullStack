import { IsEmail, IsEmpty, IsOptional, MinLength } from "class-validator";


export class CreateStudentDto {
  @IsEmpty()
  @MinLength(4)
  name: string;

  @IsEmpty()
  @MinLength(6)
  @IsEmail()
  email: string;
}

export class UpdateStudentDto {
  @IsOptional()
  @MinLength(4)
  name: string;

  @IsOptional()
  @MinLength(6)
  @IsEmail()
  email: string;
}