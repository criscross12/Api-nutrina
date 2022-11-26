import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { appConfigLoader } from './config/configs/database.loader';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const appConfig = appConfigLoader();
  const logger: Logger = app.get(Logger);

  app.setGlobalPrefix('api-nutrina');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Doc api nutriologia')
    .setDescription('Documentación de api nutriologia')
    .setVersion('1.0.0')
    .setBasePath('api-nutrina')
    .addBearerAuth()
    .addTag('Api Nutrina')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-nutrina/doc', app, document);

  await app.listen(appConfig.port, null, () => {
    logger.log(`Listening: http://localhost:${appConfig.port}`, 'AppConfig');
    logger.log(`Environment: ${appConfig.env}`, 'AppConfig');
    logger.log(
      `Database: {type: ${appConfig.db.type}, host: ${appConfig.db.host}, username: ${appConfig.db.username}, password: ****, database: ${appConfig.db.database} }`,
      'DB_Config',
    );
  });
}
bootstrap();
