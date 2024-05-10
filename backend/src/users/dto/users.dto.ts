import { IsEmail, IsNotEmpty, IsOptional, Min, MinLength } from "class-validator";

export class CreatreUserDto {
  
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

}

export class UpdateUserDto {

  @IsOptional()
  @MinLength(4)
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}