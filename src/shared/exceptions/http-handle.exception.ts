import { HttpException, Logger } from '@nestjs/common';
import { HttpError } from 'src/shared/interfaces/http-error.error';
import { HTTP_APP_ERROR } from '../errors/http-errors.error';

export class HttpHandleException {
  constructor(error: Error) {
    const e = this.getError(error);
    if (e) throw new HttpException(e, e.statusCode);
    console.log(error);
    Logger.error(error, 'HttpHandleException');
    throw new HttpException(
      {
        statusCode: 500,
        message: 'Error interno',
        error: 'app.server.error',
      },
      500,
    );
  }

  getError = (error: Error): HttpError => HTTP_APP_ERROR[error.message];
}
