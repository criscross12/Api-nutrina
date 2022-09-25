import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import {
  iccFormulation,
  imcFormulation,
  plusFivePl,
  plusThreePl,
} from 'src/shared/utils/helpers';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/create-medical-consultation.dto';
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
    registerMedicalConsultationDto.plyometric_measurements.three_pl =
      plusThreePl(
        registerMedicalConsultationDto.plyometric_measurements.pl_triceps,
        registerMedicalConsultationDto.plyometric_measurements.pl_subscapular,
        registerMedicalConsultationDto.plyometric_measurements.pl_supraspinal,
      );
    registerMedicalConsultationDto.plyometric_measurements.five_pl = plusFivePl(
      registerMedicalConsultationDto.plyometric_measurements.pl_triceps,
      registerMedicalConsultationDto.plyometric_measurements.pl_subscapular,
      registerMedicalConsultationDto.plyometric_measurements.pl_supraspinal,
      registerMedicalConsultationDto.plyometric_measurements.pl_abdominal,
      registerMedicalConsultationDto.plyometric_measurements.pl_thigh,
    );
    return plainToClass(
      GetMedialConsultationDto,
      await this.medicalConsultationService.createConsultation(
        registerMedicalConsultationDto,
      ),
    );
  };

  getOne = async (uuid: string): Promise<GetMedialConsultationDto> => {
    const res =
      await this.medicalConsultationService.getMedicalConsultationByUuid(uuid);
    return plainToClass(QueryMedialConsultationDto, res);
  };

  getOneByUserUuid = async (
    uuid: string,
  ): Promise<GetMedialConsultationDto[]> => {
    const res =
      await this.medicalConsultationService.getAllMedicalConsultationByUuid(
        uuid,
      );
    return plainToClass(QueryMedialConsultationDto, res);
  };
}
