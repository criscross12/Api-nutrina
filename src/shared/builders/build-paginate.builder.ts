import { plainToClass } from 'class-transformer';
import { PaginateDto } from '../dtos/paginate.dto';

export const buildPaginate = (
  queryObject: PaginateDto = new PaginateDto(),
): PaginateDto => {
  const recordsPerPage = 50;
  let paginateDto: PaginateDto = new PaginateDto();
  paginateDto = plainToClass(PaginateDto, queryObject);
  paginateDto.page = paginateDto.page
    ? paginateDto.page > 0
      ? paginateDto.page
      : 1
    : 1;
  paginateDto.sort = paginateDto.sort ? paginateDto.sort : 1;
  paginateDto.perPage = paginateDto.perPage
    ? paginateDto.perPage > 0
      ? paginateDto.perPage
      : 1
    : recordsPerPage;
  paginateDto.sortFieldsObj = paginateDto.sortFieldsObj
    ? paginateDto.sortFieldsObj
    : {};
  paginateDto.sortFields = paginateDto.sortFields ? paginateDto.sortFields : [];
  paginateDto.sortFields.forEach((item: string) => {
    paginateDto.sortFieldsObj[item] = paginateDto.sort;
  });
  for (const key in paginateDto.sortFieldsObj) {
    if (
      paginateDto.sortFieldsObj[key] != 1 &&
      paginateDto.sortFieldsObj[key] != -1
    ) {
      delete paginateDto.sortFieldsObj[key];
    }
  }

  return paginateDto;
};
