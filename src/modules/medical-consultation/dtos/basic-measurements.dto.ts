import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones

export class BasicMeasurementsDto {
  @ApiProperty()
  weight: number;

  @ApiProperty()
  height: number;

  // @ApiProperty()
  imc: number;

  @ApiProperty()
  waist: number;

  @ApiProperty()
  hip: number;

  // @ApiProperty()
  icc: number;
}
