import { ConfigBuildQuery } from 'src/shared/interfaces/configBuildQuery.paginate';

export const configBuildQueryPatient: ConfigBuildQuery[] = [
  { prop: '_id', isId: true, isAnd: true },
  { prop: '_id', as: 'ids', isId: true, isArray: true, isAnd: true },
  { prop: 'name', isAnd: true },
  { prop: 'first_name', isAnd: true },
  { prop: 'second_name', isAnd: true },
  { prop: 'phone', isAnd: true },
  { prop: 'uuid', isAnd: true },
];

export const configBuildQueryStatusPost: ConfigBuildQuery[] = [
  { prop: '_id', isId: true, isAnd: true },
  { prop: '_id', as: 'ids', isId: true, isArray: true, isAnd: true },
];
