import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';

export class UserNotFoundError extends Error {
  constructor() {
    super(MConsultationMessagesEnum.NOT_FOUND);
  }
}
