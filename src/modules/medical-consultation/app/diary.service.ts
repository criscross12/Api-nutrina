import { Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/user.interface';
import { CreateDiaryDto } from '../dtos/create-diary.dto';
import { GetDiaryDto } from '../dtos/get-diary.dto';
import { DiaryService } from '../services/diary.service';
import { UsersService } from 'src/integrations/users/application/services/users.services';
import { UserNotFoundError } from '../errors/user-not-found.error';

@Injectable()
export class DiaryServiceApp {
  constructor(
    private readonly diaryService: DiaryService,
    private readonly usersService: UsersService,
  ) {}

  createDiary = async (
    data: CreateDiaryDto,
    user: IUser,
  ): Promise<GetDiaryDto> => {
    const patient = await this.usersService.GetUserByUuid(
      data.patient_uuid,
      user.token,
    );
    if (!patient) throw new UserNotFoundError();
    data.patient_uuid = patient.uuid;
    data.status = true;
    data.user_uuid = user[0].uuid;
    const res = await this.diaryService.createDiary(data);
    return res;
  };

  findAll = async (): Promise<GetDiaryDto[]> => {
    let users = await this.diaryService.getDates();
    return users;
  };
}
