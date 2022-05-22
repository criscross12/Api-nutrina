import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Res,
  } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
  import { handleResponse } from 'src/shared/helpers';
import { MedicalConsultationServiceApp } from '../app/medical-consultation.service';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/medical-consultation.dto';
  
  @Controller('medical-consultation')
  @ApiTags('medical-consultation')
  export class MedicalConsultationController {
    constructor(
      private readonly medicalConsultationServiceApp: MedicalConsultationServiceApp,
    ) {}
  
    @Post('/medical-consultation')
    createConsultation(
      @Res() res,
      @Body() registerMedicalConsultationDto: RegisterMedicalConsultationDto,
    ): Promise<GetMedialConsultationDto> {
      return handleResponse(
        res,
        this.medicalConsultationServiceApp.createConsultation(registerMedicalConsultationDto),
      );
    }

    @ApiResponse({ type: GetMedialConsultationDto })
    @Get(':uuid')
    getOne(@Res() res, @Param('uuid', ParseUUIDPipe) uuid: string) {
      return handleResponse(res, this.medicalConsultationServiceApp.getOne(uuid));
    }
  }
  