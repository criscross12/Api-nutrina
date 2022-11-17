import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalConsultationDocument,
  MedicalConsultationSchema,
} from './schemas/medical_consultation.schema';
import { MedicalConsultationController } from './controllers/medical-consultation.controller';
import { MedicalConsultationServiceApp } from './app/medical-consultation.service';
import { MedicalConsultationService } from './services/medical-consultation.service';
import { UserModule } from 'src/integrations/users/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      {
        name: MedicalConsultationDocument.name,
        schema: MedicalConsultationSchema,
      },
    ]),
  ],
  controllers: [MedicalConsultationController],
  providers: [MedicalConsultationServiceApp, MedicalConsultationService],
})
export class MedicalConsultationModule {}
