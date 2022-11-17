import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class BoneDiametersDto {
  @ApiProperty()
  D_bistyloid: number;

  @ApiProperty()
  D_humerus: number;

  @ApiProperty()
  D_femur: number;
}
