import { Expose } from 'class-transformer';

import { RegisterMedicalConsultationDto } from './create-medical-consultation.dto';

@Expose()
export class UpdateConsultationDto extends RegisterMedicalConsultationDto {}
