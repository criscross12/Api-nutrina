import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones

export class BodyMeasurementsDto {
  @ApiProperty()
  fat_percentage: number;

  @ApiProperty()
  grasa_kg: number;

  @ApiProperty()
  muscle_mass_percentage: number;

  @ApiProperty()
  muscle_mass_kg: number;

  @ApiProperty()
  visceral_fat_percentage: number;

  @ApiProperty()
  body_age: number;
}
