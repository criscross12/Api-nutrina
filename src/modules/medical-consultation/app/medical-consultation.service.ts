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
  getDateConsultation,
  kgBodyFat,
  kgMoscularMass,
  maximumWeight,
  minimumWeight,
  idealWeight,
} from 'src/shared/utils/helpers';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/create-medical-consultation.dto';
import { QueryMedialConsultationDto } from '../dtos/query-medical-consultation.dto';
import { MedicalConsultationService } from '../services/medical-consultation.service';
import { UsersService } from 'src/integrations/users/application/services/users.services';
import { IUser } from '../interfaces/user.interface';
import { UpdateConsultationDto } from '../dtos/update-consultation.dto';

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
      //Basic measurements end and started body measurements
      data.body_measurements.grasa_kg = kgBodyFat(
        data.basic_measurements.weight,
        data.body_measurements.fat_percentage,
      );
      data.body_measurements.muscle_mass_kg = kgMoscularMass(
        data.basic_measurements.weight,
        data.body_measurements.muscle_mass_percentage,
      );
      data.body_measurements.maximum_weight = maximumWeight(
        data.basic_measurements.weight,
      );
      data.body_measurements.minimum_weight = minimumWeight(
        data.basic_measurements.weight,
      );
      data.body_measurements.ideal_weight = idealWeight(
        data.basic_measurements.height,
        getUser['sex'],
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
      data.average = averageCalories(
        data.valencia,
        data.mifflin_st,
        data.harris_benedict,
        data.fao_who_onu,
      );
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
      //Basic measurements end and started body measurements
      data.body_measurements.grasa_kg = kgBodyFat(
        data.basic_measurements.weight,
        data.body_measurements.fat_percentage,
      );
      data.body_measurements.muscle_mass_kg = kgMoscularMass(
        data.basic_measurements.weight,
        data.body_measurements.muscle_mass_percentage,
      );
      data.body_measurements.maximum_weight = maximumWeight(
        data.basic_measurements.weight,
      );
      data.body_measurements.minimum_weight = minimumWeight(
        data.basic_measurements.weight,
      );
      data.body_measurements.ideal_weight = idealWeight(
        data.basic_measurements.height,
        getUser['sex'],
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
      data.average = averageCalories(
        data.valencia,
        data.mifflin_st,
        data.harris_benedict,
        data.fao_who_onu,
      );
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
    }
    //End Data user
    return plainToClass(
      GetMedialConsultationDto,
      await this.medicalConsultationService.createConsultation(data),
    );
  };

  async updateConsultation(
    uuid: string,
    user: IUser,
    updateConsultationDto: UpdateConsultationDto,
  ) {
    const getRegister =
      await this.medicalConsultationService.getMedicalConsultationByUuid(uuid);

    updateConsultationDto.energy_distribution.kcalCarboHydrates =
      kcalCarboHydratesRes(
        getRegister.average,
        updateConsultationDto.energy_distribution.kcalCarboHydrates,
      );
    updateConsultationDto.energy_distribution.kcalLipids = kcalLipids(
      getRegister.average,
      updateConsultationDto.energy_distribution.kcalLipids,
    );
    updateConsultationDto.energy_distribution.kcalProteins = kcalProteins(
      getRegister.average,
      updateConsultationDto.energy_distribution.kcalProteins,
    );
    updateConsultationDto.energy_distribution.gCarboHydrates =
      GCarboHydratesRes(
        updateConsultationDto.energy_distribution.kcalCarboHydrates,
      );
    updateConsultationDto.energy_distribution.gLipids = GcalLipids(
      updateConsultationDto.energy_distribution.kcalLipids,
    );
    updateConsultationDto.energy_distribution.gProteins = GcalProteins(
      updateConsultationDto.energy_distribution.kcalProteins,
    );
    console.log(updateConsultationDto);

    const res = await this.medicalConsultationService.updateConsultationByUuid(
      getRegister._id,
      updateConsultationDto,
    );
    return res;
  }

  getOne = async (uuid: string): Promise<GetMedialConsultationDto> => {
    const res =
      await this.medicalConsultationService.getMedicalConsultationByUuid(uuid);
    return plainToClass(QueryMedialConsultationDto, res);
  };

  getOneByUserUuid = async (
    uuid: string,
  ): Promise<GetMedialConsultationDto[]> => {
    let res =
      await this.medicalConsultationService.getAllMedicalConsultationByUuid(
        uuid,
      );
    return res.map((u) => {
      u.created_at = getDateConsultation(u.created_at);
      return u;
    });
  };

  deleteOneByUuid = async (uuid: string) => {
    await this.medicalConsultationService.deleteOneByUuid(uuid);
    return { message: 'deleted' };
  };
}
