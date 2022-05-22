import { QueryPatientDto } from "src/patients/dtos/query-patient.dto";
import { PaginateDto } from "../dtos/paginate.dto";


export interface GetPaginatedPatient {
  paginate: PaginateDto;
  data: Array<QueryPatientDto>;
}
