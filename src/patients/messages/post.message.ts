import { CustomConfigModule } from 'src/config/custom-config.module';
import { CustomMessage } from 'src/shared/errors/custom.error';
import { PostMessagesEnum } from '../enums/Post.enum';
import { PostMessagesType } from '../types/Post-messages.type';

new CustomConfigModule();

export const POST_MESSAGES: PostMessagesType = {
  [PostMessagesEnum.NOT_FOUND]: new CustomMessage({
    message: 'no se encontro la publicacion',
    error: PostMessagesEnum.NOT_FOUND,
  }),
  [PostMessagesEnum.POST_UUID_IS_INVALID]: new CustomMessage({
    message: 'uuid de publicacion invalida',
    error: PostMessagesEnum.POST_UUID_IS_INVALID,
  }),
  [PostMessagesEnum.SHORT_DESCRIPTION_INVALID]: new CustomMessage({
    message: 'descripcion corta invalida',
    error: PostMessagesEnum.SHORT_DESCRIPTION_INVALID,
  }),

  [PostMessagesEnum.DESCRIPTION_INVALID]: new CustomMessage({
    message: 'descripcion invalida',
    error: PostMessagesEnum.DESCRIPTION_INVALID,
  }),

  [PostMessagesEnum.STATUS_INVALID]: new CustomMessage({
    message: 'estado invalido',
    error: PostMessagesEnum.STATUS_INVALID,
  }),
  [PostMessagesEnum.ACTION_INVALID]: new CustomMessage({
    message: 'accion invalida',
    error: PostMessagesEnum.ACTION_INVALID,
  }),
  [PostMessagesEnum.PHONE_INVALID]: new CustomMessage({
    message: 'telefono invalido',
    error: PostMessagesEnum.PHONE_INVALID,
  }),

  [PostMessagesEnum.POSTAL_CODE_INVALID]: new CustomMessage({
    message: 'codigo postal invalido',
    error: PostMessagesEnum.POSTAL_CODE_INVALID,
  }),

  [PostMessagesEnum.UNIT_TYPE_INVALID]: new CustomMessage({
    message: 'tipo de unidad invalido',
    error: PostMessagesEnum.UNIT_TYPE_INVALID,
  }),

  [PostMessagesEnum.CITY_INVALID]: new CustomMessage({
    message: 'ciudad invalida',
    error: PostMessagesEnum.CITY_INVALID,
  }),

  [PostMessagesEnum.UUID_INVALID]: new CustomMessage({
    message: 'uuid invalido',
    error: PostMessagesEnum.UUID_INVALID,
  }),
  [PostMessagesEnum.OBJECT_IS_INVALID]: new CustomMessage({
    message: 'Objeto invalido',
    error: PostMessagesEnum.OBJECT_IS_INVALID,
  }),

  [PostMessagesEnum.IMAGE_POST_INVALID]: new CustomMessage({
    message: 'Url de la imagen invalida',
    error: PostMessagesEnum.IMAGE_POST_INVALID,
  }),
  [PostMessagesEnum.USER_UUID_INVALID]: new CustomMessage({
    message: 'uuid de usuario no pertenece a la publicacion',
    error: PostMessagesEnum.USER_UUID_INVALID,
  }),
};
