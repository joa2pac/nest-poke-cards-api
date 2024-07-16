import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWeaknessDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
