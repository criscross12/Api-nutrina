import { POST_MESSAGES } from "src/patients/messages/post.message";

export const HTTP_APP_ERROR = {
  ...POST_MESSAGES,
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
