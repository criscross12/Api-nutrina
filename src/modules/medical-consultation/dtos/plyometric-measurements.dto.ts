import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
//TODO crear mensajes de validaciones
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class PlyometricMeasurementsDto {
  @ApiProperty()
  pl_triceps: number;

  @ApiProperty()
  pl_subscapular: number;

  @ApiProperty()
  pl_biceps: number;

  @ApiProperty()
  pl_iliac_crest: number;

  @ApiProperty()
  pl_supraspinal: number;

  @ApiProperty()
  pl_abdominal: number;

  @ApiProperty()
  pl_thigh: number;

  @ApiProperty()
  pl_leg: number;

  @IsNumber()
  three_pl: number;

  @IsNumber()
  five_pl: number;
}
