import { CustomMessage } from 'src/shared/errors/custom.error';
import { PatientMessagesEnum } from '../enums/patients.enum';

export type PostMessagesType = {
  [key in PatientMessagesEnum]: CustomMessage;
};
