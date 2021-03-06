import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicalConsultationDocument } from '../schemas/medical_consultation.schema';
import { RegisterMedicalConsultationDto } from '../dtos/medical-consultation.dto';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { convertToJson } from 'src/shared/helpers';

@Injectable()
export class MedicalConsultationService {
    constructor(
        @InjectModel(MedicalConsultationDocument.name)
        private readonly medicalConsultationModel: Model<MedicalConsultationDocument>,
    ) { }

    createConsultation = async (
        registerMedicalConsultationDto: RegisterMedicalConsultationDto,
    ): Promise<GetMedialConsultationDto> =>{       
        const res = await new this.medicalConsultationModel(registerMedicalConsultationDto).save();   
        return convertToJson(res);
    }

    getMedicalConsultationByUuid = async (uuid: string): Promise<GetMedialConsultationDto> =>
    convertToJson(await this.medicalConsultationModel.findOne({ patient_uuid: uuid }));
}
