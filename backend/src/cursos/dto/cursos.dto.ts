import { IsEmpty, MinLength } from "class-validator";



export class CreateCursoDto {
  @IsEmpty()
  @MinLength(5)
  name: string;
}

export class UpdateCursoDto {
  @IsEmpty()
  @MinLength(5)
  name: string;

}