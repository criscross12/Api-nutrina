import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsController } from './controllers/patients.controller';
import { PatientDocument, PatientSchema } from './schemas/patient.schema';
import { PatientsService } from './services/patients.service';
import { PatientsServiceApp } from './app/patients.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PatientDocument.name, schema: PatientSchema },
    ]),
  ],
  controllers: [PatientsController],
  providers: [PatientsService, PatientsServiceApp],
})
export class PatientsModule {}
