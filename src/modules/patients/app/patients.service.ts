import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetAge } from 'src/shared/utils/helpers';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { GetPatientDto } from '../dtos/get-patient.dto';
import { QueryPatientDto } from '../dtos/query-patient.dto';
import { PatientNotFoundError } from '../errors/patient-not-found.error';
import { PatientsService } from '../services/patients.service';

@Injectable()
export class PatientsServiceApp {
  constructor(private readonly patientsService: PatientsService) {}

  createPatient = async (
    createPatientDto: CreatePatientDto,
  ): Promise<GetPatientDto> =>
    plainToClass(
      GetPatientDto,
      await this.patientsService.createPatient(createPatientDto),
    );

  findAll = async (): Promise<GetPatientDto[]> => {
    let patients = await this.patientsService.getPatients();
    return patients.map((p) => {
      p.age = GetAge(p.date_of_birth);
      return p;
    });
  };

  getOne = async (uuid: string): Promise<GetPatientDto> => {
    let patient = await this.patientsService.getPatientByUuid(uuid);
    patient.age = GetAge(patient.date_of_birth);
    if (!patient) throw new PatientNotFoundError();
    return plainToClass(QueryPatientDto, patient);
  };

  delete = async (uuid: string) => {
    await this.patientsService.deletePatientByUuid(uuid);
    return { message: 'deleted' };
  };
}
