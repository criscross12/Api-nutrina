import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientsModule } from './patients/patients.module';
import { CustomConfigModule } from './config/custom-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DbConnectionService } from './config/services/db-connection.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';


@Module({
  imports: [CustomConfigModule,
    MongooseModule.forRoot(
      new DbConnectionService().getDBConection(),
      new DbConnectionService().optionsDB(),
    ),PatientsModule],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  Logger,],
})
export class AppModule {}
