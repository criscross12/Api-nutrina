import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  Res,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { handleResponse } from 'src/shared/helpers';
import { MedicalConsultationServiceApp } from '../app/medical-consultation.service';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { RegisterMedicalConsultationDto } from '../dtos/create-medical-consultation.dto';
import { AuthGuard, Roles, Permissions } from 'src/integrations/auth-sdk/src';
import { ListRoles } from 'src/shared/static/roles';
import { ListPermissions } from 'src/shared/static/permissions';
import { UserDecorator } from '../decorators/user.decorator';
import { IUser } from '../interfaces/user.interface';
import { UpdateConsultationDto } from '../dtos/update-consultation.dto';

@Controller('medical-consultation')
@ApiTags('medical-consultation')
@ApiBearerAuth()
export class MedicalConsultationController {
  constructor(
    private readonly medicalConsultationServiceApp: MedicalConsultationServiceApp,
  ) {}

  @ApiCreatedResponse({ type: GetMedialConsultationDto })
  @Roles(ListRoles.SUPER_ADMIN)
  @Permissions(ListPermissions.CREATE_DIET)
  @UseGuards(AuthGuard)
  @Post('/medical-consultation')
  createConsultation(
    @Res() res,
    @Body() data: RegisterMedicalConsultationDto,
    @UserDecorator() user: IUser,
  ) {
    user.token = user[1];
    return handleResponse(
      res,
      this.medicalConsultationServiceApp.createConsultation(data, user),
    );
  }

  @ApiBearerAuth()
  @ApiOkResponse({ type: GetMedialConsultationDto })
  @Permissions(ListPermissions.CREATE_DIET)
  @Roles(ListRoles.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Put('/update/:uuid')
  updateConsultation(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateMeDto: UpdateConsultationDto,
    @UserDecorator() user: IUser,
    @Res() res,
  ): Promise<GetMedialConsultationDto> {
    return handleResponse(
      res,
      this.medicalConsultationServiceApp.updateConsultation(
        uuid,
        user,
        updateMeDto,
      ),
    );
  }

  @ApiResponse({ type: GetMedialConsultationDto })
  @Roles(ListRoles.SUPER_ADMIN)
  @Permissions(ListPermissions.CREATE_DIET)
  @UseGuards(AuthGuard)
  @Get('/One/:uuid')
  getOne(@Res() res, @Param('uuid', ParseUUIDPipe) uuid: string) {
    return handleResponse(res, this.medicalConsultationServiceApp.getOne(uuid));
  }

  @ApiOkResponse({ type: [GetMedialConsultationDto] })
  @Roles(ListRoles.SUPER_ADMIN)
  @Permissions(ListPermissions.CREATE_DIET)
  @UseGuards(AuthGuard)
  @Get(':user_uuid')
  getAllByUserUuid(
    @Res() res,
    @Param('user_uuid', ParseUUIDPipe) user_uuid: string,
  ): Promise<GetMedialConsultationDto[]> {
    return handleResponse(
      res,
      this.medicalConsultationServiceApp.getOneByUserUuid(user_uuid),
    );
  }

  @Delete(':uuid')
  deleteRegisterOne(@Res() res, @Param('uuid', ParseUUIDPipe) uuid: string) {
    return handleResponse(
      res,
      this.medicalConsultationServiceApp.deleteOneByUuid(uuid),
    );
  }
}
