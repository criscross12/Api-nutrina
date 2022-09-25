import { ApiProperty } from '@nestjs/swagger';
import { PaginateDto } from 'src/shared/dtos/paginate.dto';
import { GetPatientDto } from './get-patient.dto';

export class GetPatientWithPaginateDto {
  @ApiProperty()
  paginate: PaginateDto;
  @ApiProperty({ type: [GetPatientDto] })
  data: GetPatientDto[];
}
