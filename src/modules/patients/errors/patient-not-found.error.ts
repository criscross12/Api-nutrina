import { PatientMessagesEnum } from '../enums/patients.enum';

export class PatientNotFoundError extends Error {
  constructor() {
    super(PatientMessagesEnum.NOT_FOUND);
  }
}
