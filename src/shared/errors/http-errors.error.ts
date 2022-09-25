import { PATIENT_MESSAGES } from 'src/modules/patients/messages/patients.message';

export const HTTP_APP_ERROR = {
  ...PATIENT_MESSAGES,
  'empty.error': {
    message: 'This field does not must be empty',
    error: 'empty.error',
    statusCode: 400,
  },
  'number.in.format.string.ivalid.error': {
    message: 'This field must be a number in format string',
    error: 'number.in.format.string.ivalid.error',
    statusCode: 400,
  },
};
