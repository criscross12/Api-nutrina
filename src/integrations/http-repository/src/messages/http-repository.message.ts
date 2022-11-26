import { CustomMessage } from '../class/custom.error';
import { HttpRepositorymessagesKey } from '../enums/http-repository-messages.keys';

export type HttpRepositoryMessagesType = {
  [key in HttpRepositorymessagesKey]: CustomMessage;
};

export const HTTP_REPOSITORY_MESSAGES: HttpRepositoryMessagesType = {
  [HttpRepositorymessagesKey.REQUEST_FAIL]: new CustomMessage({
    message: 'Algo salio mal en la solicitud',
    error: HttpRepositorymessagesKey.REQUEST_FAIL,
  }),
  [HttpRepositorymessagesKey.BASE_URL_REQUIRED]: new CustomMessage({
    message: 'La url base es requerida',
    error: HttpRepositorymessagesKey.BASE_URL_REQUIRED,
  }),
  [HttpRepositorymessagesKey.METHOD_REQUIRED]: new CustomMessage({
    message: 'El metodo de la petición es requerido',
    error: HttpRepositorymessagesKey.METHOD_REQUIRED,
  }),
};
