import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomConfigModule } from './config/custom-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DbConnectionService } from './config/services/db-connection.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { MedicalConsultationModule } from './modules/medical-consultation/medical-consultation.module';

@Module({
  imports: [
    CustomConfigModule,
    MongooseModule.forRoot(
      new DbConnectionService().getDBConection(),
      new DbConnectionService().optionsDB(),
    ),
    MedicalConsultationModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    Logger,
  ],
})
export class AppModule {}
