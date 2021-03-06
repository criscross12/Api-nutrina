import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetAge } from 'src/shared/utils/helpers';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { GetPatientDto } from '../dtos/get-patient.dto';
import { QueryPatientDto } from '../dtos/query-patient.dto';
import { PostNotFoundError } from '../errors/post-not-found.error';
import { PatientsService } from '../services/patients.service';

@Injectable()
export class PatientsServiceApp {
  constructor(private readonly patientsService: PatientsService) { }

  createPatient = async (
    createPatientDto: CreatePatientDto,
  ): Promise<GetPatientDto> =>
    plainToClass(
      GetPatientDto,
      await this.patientsService.createPatient(createPatientDto),
    );

  getOne = async (uuid: string): Promise<GetPatientDto> => {
    let patient = await this.patientsService.getPatientByUuid(uuid);
    patient.age = GetAge(patient.date_of_birth);
    if (!patient) throw new PostNotFoundError();
    return plainToClass(QueryPatientDto, patient);
  };
}
