import { IsArray, IsString, ArrayMinSize, IsNotEmpty } from 'class-validator';

export class CreateAttackDto {
  @IsString()
  @IsNotEmpty()
  attackName: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsString()
  cost: string;

  @IsString()
  @IsNotEmpty()
  damage: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
