import {
  createParamDecorator,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { QueryPatientDto } from 'src/patients/dtos/query-patient.dto';

export const BuildQueryPatient = createParamDecorator(
  async (
    data: unknown,
    ctx: ExecutionContext,
  ): Promise<Partial<QueryPatientDto>> => {
    const request: Request = ctx.switchToHttp().getRequest();
    const getPostDto: Partial<QueryPatientDto> = plainToClass(
      QueryPatientDto,
      Object.entries(request.body).length !== 0 ? request.body : request.query,
    );
    const resV = await validate(getPostDto);
    if (resV.length > 0) throw new BadRequestException(resV);
    return getPostDto;
  },
);
