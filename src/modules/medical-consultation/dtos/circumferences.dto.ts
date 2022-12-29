import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class CircumferencesDto {
  @ApiProperty()
  c_relaxed_arm: number;

  @ApiProperty()
  c_contracted_arm: number;

  @ApiProperty()
  c_leg_max: number;

  @ApiProperty()
  cmb: number;

  @ApiProperty()
  c_mid_thigh: number;

  c_corrected_arm: number;

  c_corrected_leg: number;
}
