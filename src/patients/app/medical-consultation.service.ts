import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { iccFormulation, imcFormulation } from 'src/shared/utils/helpers';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/medical-consultation.dto';
import { QueryMedialConsultationDto } from '../dtos/query-medical-consultation.dto';
import { MedicalConsultationService } from '../services/medical-consultation.service';

@Injectable()
export class MedicalConsultationServiceApp {
  constructor(
    private readonly medicalConsultationService: MedicalConsultationService,
  ) {}

  createConsultation = async (
    registerMedicalConsultationDto: RegisterMedicalConsultationDto,
  ): Promise<GetMedialConsultationDto> => {
    registerMedicalConsultationDto.basic_measurements.imc = imcFormulation(
      registerMedicalConsultationDto.basic_measurements.weight,
      registerMedicalConsultationDto.basic_measurements.height,
    );
    registerMedicalConsultationDto.basic_measurements.icc = iccFormulation(
      registerMedicalConsultationDto.basic_measurements.waist,
      registerMedicalConsultationDto.basic_measurements.hip,
    );
    return plainToClass(
      GetMedialConsultationDto,
      await this.medicalConsultationService.createConsultation(
        registerMedicalConsultationDto,
      ),
    );
  };

  getOne = async (uuid: string): Promise<GetMedialConsultationDto> => {
    const res = await this.medicalConsultationService.getMedicalConsultationByUuid(uuid);
    return plainToClass(QueryMedialConsultationDto, res);
  };
}
