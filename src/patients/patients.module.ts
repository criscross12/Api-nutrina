import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsController } from './controllers/patients.controller';
import {
  MedicalConsultationDocument,
  MedicalConsultationSchema,
} from './schemas/medical_consultation.schema';
import { PatientDocument, PatientSchema } from './schemas/patient.schema';
import {
  BasicMeasurementsDocument,
  BasicMeasurementsSchema,
} from './schemas/basic_measurements.schema';
import {
  BodyMeasurementsDocument,
  BodyMeasurementsSchema,
} from './schemas/body_measurements.shema';
import {
  VitalSignsDocument,
  VitalSignsSchema,
} from './schemas/vital_signs.schema';
import {
  PlyometricMeasurementsDocument,
  PlyometricMeasurementsSchema,
} from './schemas/plyometric_measurements.schema';
import { PatientsService } from './services/patients.service';
import { PatientsServiceApp } from './app/patients.service';
import { MedicalConsultationController } from './controllers/medical-consultation.controller';
import { MedicalConsultationServiceApp } from './app/medical-consultation.service';
import { MedicalConsultationService } from './services/medical-consultation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PatientDocument.name, schema: PatientSchema },
      {
        name: MedicalConsultationDocument.name,
        schema: MedicalConsultationSchema,
      },
      { name: BasicMeasurementsDocument.name, schema: BasicMeasurementsSchema },
      { name: BodyMeasurementsDocument.name, schema: BodyMeasurementsSchema },
      { name: VitalSignsDocument.name, schema: VitalSignsSchema },
      {
        name: PlyometricMeasurementsDocument.name,
        schema: PlyometricMeasurementsSchema,
      },
    ]),
  ],
  controllers: [PatientsController, MedicalConsultationController],
  providers: [PatientsService, PatientsServiceApp, MedicalConsultationServiceApp, MedicalConsultationService],
})
export class PatientsModule { }
