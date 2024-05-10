import { IsEmpty, IsOptional, MinLength } from "class-validator";


export class CreateTaskDto {

  @IsEmpty()
  @MinLength(4)
  title: string;

  @IsEmpty()
  @MinLength(6)
  description: string;
}

export class UpdateTaskDto {

  @IsOptional()
  @MinLength(4)
  title: string;

  @IsOptional()
  @MinLength(6)
  description: string;

  @IsOptional()
  complet: boolean;


}