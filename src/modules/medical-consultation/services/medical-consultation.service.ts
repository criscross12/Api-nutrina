import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicalConsultationDocument } from '../schemas/medical_consultation.schema';
import { RegisterMedicalConsultationDto } from '../dtos/create-medical-consultation.dto';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { convertToJson, parseDocument } from 'src/shared/helpers';
import { UpdateConsultationDto } from '../dtos/update-consultation.dto';

@Injectable()
export class MedicalConsultationService {
  constructor(
    @InjectModel(MedicalConsultationDocument.name)
    private readonly medicalConsultationModel: Model<MedicalConsultationDocument>,
  ) {}

  createConsultation = async (
    registerMedicalConsultationDto: RegisterMedicalConsultationDto,
  ): Promise<GetMedialConsultationDto> => {
    const res = await new this.medicalConsultationModel(
      registerMedicalConsultationDto,
    ).save();
    return convertToJson(res);
  };

  updateConsultationByUuid = (
    id: string,
    updateConsultationDto: UpdateConsultationDto,
  ) => {
    const update = this.medicalConsultationModel.findByIdAndUpdate(
      id,
      updateConsultationDto,
    );
    console.log('Update: ', update);

    return update;
  };

  getMedicalConsultationByUuid = async (
    uuid: string,
  ): Promise<GetMedialConsultationDto> =>
    convertToJson(await this.medicalConsultationModel.findOne({ uuid }));

  getAllMedicalConsultationByUuid = async (
    uuid: string,
  ): Promise<GetMedialConsultationDto[]> => {
    const registers = await this.medicalConsultationModel
      .find({ patient_uuid: uuid })
      .exec();
    return registers.map((u) => parseDocument(u));
  };

  deleteOneByUuid = async (uuid: string) => {
    return await this.medicalConsultationModel.findOneAndUpdate(
      { uuid },
      { deleted_at: Date.now() },
    );
  };
}
