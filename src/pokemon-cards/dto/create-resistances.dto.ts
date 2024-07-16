import { IsString, IsNotEmpty } from 'class-validator';

export class CreateResistancesDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
