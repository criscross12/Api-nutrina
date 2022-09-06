import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePatientDto } from '../dtos/create-patient.dto';
import { PatientDocument } from '../schemas/patient.schema';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { GetPatientDto } from '../dtos/get-patient.dto';
import { convertToJson, parseDocument } from 'src/shared/helpers';
import { PaginateDto } from 'src/shared/dtos/paginate.dto';
import { QueryPatientDto } from '../dtos/query-patient.dto';
import { GetPaginatedPatient } from 'src/shared/interfaces/index.interfaces';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(PatientDocument.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  getPatientByUuid = async (uuid: string): Promise<GetPatientDto> =>
    convertToJson(await this.patientModel.findOne({ uuid }));

  deletePatientByUuid = async (uuid: string) => {
    return await this.patientModel.findOneAndUpdate(
      { uuid },
      { deleted_at: Date.now() },
    );
  };

  getPatients = async (): Promise<GetPatientDto[]> => {
    const post = await this.patientModel.find({ deleted_at: null });
    return post.map((u) => parseDocument(u));
  };

  createPatient = async (
    createPatientDto: CreatePatientDto,
  ): Promise<GetPatientDto> => {
    const res = await new this.patientModel({
      ...createPatientDto,
      created_at: new Date(),
    }).save();
    return convertToJson(res);
  };

  async findAllbyFilters(
    queryPostDto: QueryPatientDto,
    search: string,
    paginate: PaginateDto,
  ): Promise<GetPaginatedPatient> {
    let queryOr = queryPostDto['$and'][0]['$or'];
    queryOr = queryOr ?? [];
    if (search) {
      queryPostDto['$and'][0]['$or'] = [
        ...queryOr,
        {
          $text: { $search: search },
        },
      ];
    }
    const score = search ? { score: { $meta: 'textScore' } } : {};
    const documents = await this.patientModel
      .find(queryPostDto, score)
      .limit(paginate.perPage)
      .skip(paginate.perPage * (paginate.page - 1))
      .sort(score)
      .exec();
    const count = await this.patientModel.countDocuments(queryPostDto);
    const getPaginatedPost: GetPaginatedPatient = {
      paginate: {
        page: paginate.page,
        perPage: paginate.perPage,
        pages: Math.ceil(count / paginate.perPage),
        count: count,
      },
      data: documents.map((d) => plainToClass(QueryPatientDto, d.toJSON())),
    };
    return getPaginatedPost;
  }
}
