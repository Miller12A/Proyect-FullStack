import { IsEmail, IsEmpty, MinLength } from "class-validator";


export class CreateMateriaDto {
  @IsEmpty()
  @MinLength(4)
  name: string;
}

export class UpdateMateriaDto {
  @IsEmpty()
  @MinLength(4)
  name: string;
}