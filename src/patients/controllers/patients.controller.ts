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
import { buildPaginate } from 'src/shared/builders/build-paginate.builder';
import { buildQuery } from 'src/shared/builders/build-query.utils';
import { BuildQueryPatient } from 'src/shared/decorators/build-query.decorator';
import { ExcListApiQueryPatient } from 'src/shared/decorators/excecute-decorator/excecute-decorators.decorator';
import { handleResponse } from 'src/shared/helpers';
import { PatientsServiceApp } from '../app/patients.service';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { GetPatientWithPaginateDto } from '../dtos/get-patient-with-paginate.dto';
import { GetPatientDto } from '../dtos/get-patient.dto';
import { QueryPatientDto } from '../dtos/query-patient.dto';
import { PatientsService } from '../services/patients.service';
import { configBuildQueryPatient } from '../static';

@Controller('patients')
@ApiTags('patients')
export class PatientsController {
  constructor(
    private readonly patientsApp: PatientsServiceApp,
    private readonly patientsService: PatientsService,
  ) {}

  @Post('/patients')
  createPatient(
    @Res() res,
    @Body() createPatientDto: CreatePatientDto,
  ): Promise<GetPatientDto> {
    return handleResponse(
      res,
      this.patientsApp.createPatient(createPatientDto),
    );
  }

  @ApiResponse({ type: [GetPatientWithPaginateDto] })
  @Get()
  @ExcListApiQueryPatient()
  // @UseGuards(ApiAuthGuard)
  async getbyfilter(
    @Res() res,
    @BuildQueryPatient() queryPatientDto: Partial<QueryPatientDto>,
  ) {
    const data = this.patientsService.findAll(
      buildQuery(queryPatientDto, configBuildQueryPatient),
      queryPatientDto.search,
      buildPaginate(queryPatientDto),
    );
    return handleResponse(res, data);
  }

  @ApiResponse({ type: GetPatientDto })
  @Get(':uuid')
  getOne(@Res() res, @Param('uuid', ParseUUIDPipe) uuid: string) {
    return handleResponse(res, this.patientsApp.getOne(uuid));
  }
}
