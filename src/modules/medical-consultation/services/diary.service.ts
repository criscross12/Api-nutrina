import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DiaryDocument } from '../schemas/diary.schema';
import { convertToJson, parseDocument } from 'src/shared/helpers';
import { CreateDiaryDto } from '../dtos/create-diary.dto';
import { GetDiaryDto } from '../dtos/get-diary.dto';

@Injectable()
export class DiaryService {
  constructor(
    @InjectModel(DiaryDocument.name)
    private readonly diaryModel: Model<DiaryDocument>,
  ) {}

  createDiary = async (data: CreateDiaryDto): Promise<GetDiaryDto> => {
    const res = await new this.diaryModel(data).save();
    return convertToJson(res);
  };

  getDates = async (): Promise<GetDiaryDto[]> => {
    const dates = await this.diaryModel.find({
      deleted_at: null,
      status: true,
    });
    return dates.map((u) => parseDocument(u));
  };
}
