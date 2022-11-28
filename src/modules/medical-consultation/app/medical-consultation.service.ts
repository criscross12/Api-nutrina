import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import {
  fao_who_onu,
  HarrisBenedict,
  mifflinSN,
  valencia,
  iccFormulation,
  imcFormulation,
  CorrectedArmF,
  CorrectedLegF,
  plusFivePl,
  plusThreePl,
  averageCalories,
  kcalCarboHydratesRes,
  kcalLipids,
  kcalProteins,
  GCarboHydratesRes,
  GcalLipids,
  GcalProteins,
} from 'src/shared/utils/helpers';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/create-medical-consultation.dto';
import { QueryMedialConsultationDto } from '../dtos/query-medical-consultation.dto';
import { MedicalConsultationService } from '../services/medical-consultation.service';
import { UsersService } from 'src/integrations/users/application/services/users.services';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class MedicalConsultationServiceApp {
  constructor(
    private readonly medicalConsultationService: MedicalConsultationService,
    private readonly usersService: UsersService,
  ) {}

  createConsultation = async (
    data: RegisterMedicalConsultationDto,
    user: IUser,
  ): Promise<GetMedialConsultationDto> => {
    if (!data.patient_uuid) {
      data.data_patient.password = '123456';
      data.data_patient.roles = ['patient'];
      const newPatient = await this.usersService.CreateUser(
        data.data_patient,
        user.token,
      );
      console.log('Usuario nuevo: ', newPatient);

      const getUser = await this.usersService.GetUserByUuid(
        newPatient['uuid'],
        user.token,
      );
      data.user_uuid = user[0].uuid;
      data.patient_uuid = getUser['uuid'];
      //Basic measurements
      data.basic_measurements.imc = imcFormulation(
        data.basic_measurements.weight,
        data.basic_measurements.height,
      );
      data.basic_measurements.icc = iccFormulation(
        data.basic_measurements.waist,
        data.basic_measurements.hip,
      );
      data.circumferences.c_corrected_arm = CorrectedArmF(
        data.circumferences.c_contracted_arm,
        data.plyometric_measurements.pl_triceps,
      );
      data.circumferences.c_corrected_leg = CorrectedLegF(
        data.circumferences.c_leg_max,
        data.plyometric_measurements.pl_leg,
      );
      //Basic measurements end
      //TODO agregar formulas restantes de consulta y nota
      data.plyometric_measurements.three_pl = plusThreePl(
        data.plyometric_measurements.pl_triceps,
        data.plyometric_measurements.pl_subscapular,
        data.plyometric_measurements.pl_supraspinal,
      );
      data.plyometric_measurements.five_pl = plusFivePl(
        data.plyometric_measurements.pl_triceps,
        data.plyometric_measurements.pl_subscapular,
        data.plyometric_measurements.pl_supraspinal,
        data.plyometric_measurements.pl_abdominal,
        data.plyometric_measurements.pl_thigh,
      );
      data.fao_who_onu = fao_who_onu(
        getUser['age'],
        getUser['sex'],
        data.basic_measurements.weight,
      );
      data.valencia = valencia(
        getUser['sex'],
        getUser['age'],
        data.basic_measurements.weight,
      );
      data.harris_benedict = HarrisBenedict(
        getUser['sex'],
        getUser['age'],
        data.basic_measurements.weight,
        data.basic_measurements.height,
      );
      data.mifflin_st = mifflinSN(
        getUser['sex'],
        data.basic_measurements.weight,
        getUser['age'],
        data.basic_measurements.height,
      );
      const average = averageCalories(
        data.valencia,
        data.mifflin_st,
        data.harris_benedict,
        data.fao_who_onu,
      );
      data.energy_distribution.kcalCarboHydrates = kcalCarboHydratesRes(
        average,
        data.energy_distribution.kcalCarboHydrates,
      );
      data.energy_distribution.kcalLipids = kcalLipids(
        average,
        data.energy_distribution.kcalLipids,
      );
      data.energy_distribution.kcalProteins = kcalProteins(
        average,
        data.energy_distribution.kcalProteins,
      );
      data.energy_distribution.gCarboHydrates = GCarboHydratesRes(
        data.energy_distribution.kcalCarboHydrates,
      );
      data.energy_distribution.gLipids = GcalLipids(
        data.energy_distribution.kcalLipids,
      );
      data.energy_distribution.gProteins = GcalProteins(
        data.energy_distribution.kcalProteins,
      );
    } else {
      // TODO Obtener datos del user de api_users
      const getUser = await this.usersService.GetUserByUuid(
        data.patient_uuid,
        user.token,
      );
      data.user_uuid = user[0].uuid;
      //Basic measurements
      data.basic_measurements.imc = imcFormulation(
        data.basic_measurements.weight,
        data.basic_measurements.height,
      );
      data.basic_measurements.icc = iccFormulation(
        data.basic_measurements.waist,
        data.basic_measurements.hip,
      );
      data.circumferences.c_corrected_arm = CorrectedArmF(
        data.circumferences.c_contracted_arm,
        data.plyometric_measurements.pl_triceps,
      );
      data.circumferences.c_corrected_leg = CorrectedLegF(
        data.circumferences.c_leg_max,
        data.plyometric_measurements.pl_leg,
      );
      //Basic measurements end
      //TODO agregar formulas restantes de consulta y nota
      data.plyometric_measurements.three_pl = plusThreePl(
        data.plyometric_measurements.pl_triceps,
        data.plyometric_measurements.pl_subscapular,
        data.plyometric_measurements.pl_supraspinal,
      );
      data.plyometric_measurements.five_pl = plusFivePl(
        data.plyometric_measurements.pl_triceps,
        data.plyometric_measurements.pl_subscapular,
        data.plyometric_measurements.pl_supraspinal,
        data.plyometric_measurements.pl_abdominal,
        data.plyometric_measurements.pl_thigh,
      );
      data.fao_who_onu = fao_who_onu(
        getUser['age'],
        getUser['sex'],
        data.basic_measurements.weight,
      );
      data.valencia = valencia(
        getUser['sex'],
        getUser['age'],
        data.basic_measurements.weight,
      );
      data.harris_benedict = HarrisBenedict(
        getUser['sex'],
        getUser['age'],
        data.basic_measurements.weight,
        data.basic_measurements.height,
      );
      data.mifflin_st = mifflinSN(
        getUser['sex'],
        data.basic_measurements.weight,
        getUser['age'],
        data.basic_measurements.height,
      );
      const average = averageCalories(
        data.valencia,
        data.mifflin_st,
        data.harris_benedict,
        data.fao_who_onu,
      );
      data.energy_distribution.kcalCarboHydrates = kcalCarboHydratesRes(
        average,
        data.energy_distribution.kcalCarboHydrates,
      );
      data.energy_distribution.kcalLipids = kcalLipids(
        average,
        data.energy_distribution.kcalLipids,
      );
      data.energy_distribution.kcalProteins = kcalProteins(
        average,
        data.energy_distribution.kcalProteins,
      );
      data.energy_distribution.gCarboHydrates = GCarboHydratesRes(
        data.energy_distribution.kcalCarboHydrates,
      );
      data.energy_distribution.gLipids = GcalLipids(
        data.energy_distribution.kcalLipids,
      );
      data.energy_distribution.gProteins = GcalProteins(
        data.energy_distribution.kcalProteins,
      );
    }
    //End Data user
    return plainToClass(
      GetMedialConsultationDto,
      await this.medicalConsultationService.createConsultation(data),
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
