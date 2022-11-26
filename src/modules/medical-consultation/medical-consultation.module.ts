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
import { AuthModule } from 'src/integrations/auth-sdk/src';

@Module({
  imports: [
    UserModule,
    AuthModule,
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
