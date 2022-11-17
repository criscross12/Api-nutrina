import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class EnergtDistributionDto {
  @ApiProperty()
  kcalCarboHydrates: number;

  @ApiProperty()
  kcalLipids: number;

  @ApiProperty()
  kcalProteins: number;

  gCarboHydrates: number;

  gLipids: number;

  gProteins: number;
}
