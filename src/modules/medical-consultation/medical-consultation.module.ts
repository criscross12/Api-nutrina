import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalConsultationDocument,
  MedicalConsultationSchema,
} from './schemas/medical_consultation.schema';
import { DiaryDocument, DiarySchema } from './schemas/diary.schema';
import { MedicalConsultationController } from './controllers/medical-consultation.controller';
import { MedicalConsultationServiceApp } from './app/medical-consultation.service';
import { MedicalConsultationService } from './services/medical-consultation.service';
import { UserModule } from 'src/integrations/users/user.module';
import { AuthModule } from 'src/integrations/auth-sdk/src';
import { DiaryServiceApp } from './app/diary.service';
import { DiaryService } from './services/diary.service';
import { DiaryController } from './controllers/diary.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forFeature([
      {
        name: MedicalConsultationDocument.name,
        schema: MedicalConsultationSchema,
      },
      {
        name: DiaryDocument.name,
        schema: DiarySchema,
      },
    ]),
  ],
  controllers: [MedicalConsultationController, DiaryController],
  providers: [
    MedicalConsultationServiceApp,
    DiaryServiceApp,
    DiaryService,
    MedicalConsultationService,
  ],
})
export class MedicalConsultationModule {}
