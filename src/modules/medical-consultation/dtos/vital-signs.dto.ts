import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class VitalSignsDto {
  @ApiProperty()
  capillary_glucose: number;

  @ApiProperty()
  heart_rate: number;

  @ApiProperty()
  blood_pressure: string;
}
