import { Body, Controller, Post, UseGuards, Res, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { handleResponse } from 'src/shared/helpers';
import { DiaryServiceApp } from '../app/diary.service';
import { GetMedialConsultationDto } from '../dtos/get-medical-consultation.dto';
import { AuthGuard, Roles, Permissions } from 'src/integrations/auth-sdk/src';
import { ListRoles } from 'src/shared/static/roles';
import { ListPermissions } from 'src/shared/static/permissions';
import { UserDecorator } from '../decorators/user.decorator';
import { IUser } from '../interfaces/user.interface';
import { CreateDiaryDto } from '../dtos/create-diary.dto';
import { GetDiaryDto } from '../dtos/get-diary.dto';

@Controller('Diary')
@ApiTags('Diary')
@ApiBearerAuth()
export class DiaryController {
  constructor(private readonly diaryServiceApp: DiaryServiceApp) {}

  @ApiCreatedResponse({ type: GetMedialConsultationDto })
  @Roles(ListRoles.SUPER_ADMIN)
  @Permissions(ListPermissions.CREATE_DIET)
  @UseGuards(AuthGuard)
  @Post('/diary')
  createDiary(
    @Res() res,
    @Body() data: CreateDiaryDto,
    @UserDecorator() user: IUser,
  ) {
    user.token = user[1];
    return handleResponse(res, this.diaryServiceApp.createDiary(data, user));
  }

  @Permissions(ListPermissions.GET_DIET)
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: [GetDiaryDto] })
  @Get()
  findAll(@Res() res): Promise<GetDiaryDto[]> {
    return handleResponse(res, this.diaryServiceApp.findAll());
  }
}
