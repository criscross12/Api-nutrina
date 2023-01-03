import { CustomConfigModule } from 'src/config/custom-config.module';
import { CustomMessage } from 'src/shared/errors/custom.error';
import { PatientMessagesEnum } from '../enums/patients.enum';
import { PostMessagesType } from '../types/post-messages.type';

new CustomConfigModule();

export const PATIENT_MESSAGES: PostMessagesType = {
  [PatientMessagesEnum.NOT_FOUND]: new CustomMessage({
    message: 'no se encontro al paciente',
    error: PatientMessagesEnum.NOT_FOUND,
  }),
  [PatientMessagesEnum.PATIENT_UUID_IS_INVALID]: new CustomMessage({
    message: 'uuid de publicacion invalida',
    error: PatientMessagesEnum.PATIENT_UUID_IS_INVALID,
  }),
  [PatientMessagesEnum.SHORT_DESCRIPTION_INVALID]: new CustomMessage({
    message: 'descripcion corta invalida',
    error: PatientMessagesEnum.SHORT_DESCRIPTION_INVALID,
  }),

  [PatientMessagesEnum.DESCRIPTION_INVALID]: new CustomMessage({
    message: 'descripcion invalida',
    error: PatientMessagesEnum.DESCRIPTION_INVALID,
  }),

  [PatientMessagesEnum.STATUS_INVALID]: new CustomMessage({
    message: 'estado invalido',
    error: PatientMessagesEnum.STATUS_INVALID,
  }),
  [PatientMessagesEnum.ACTION_INVALID]: new CustomMessage({
    message: 'accion invalida',
    error: PatientMessagesEnum.ACTION_INVALID,
  }),
  [PatientMessagesEnum.PHONE_INVALID]: new CustomMessage({
    message: 'telefono invalido',
    error: PatientMessagesEnum.PHONE_INVALID,
  }),

  [PatientMessagesEnum.POSTAL_CODE_INVALID]: new CustomMessage({
    message: 'codigo postal invalido',
    error: PatientMessagesEnum.POSTAL_CODE_INVALID,
  }),

  [PatientMessagesEnum.UNIT_TYPE_INVALID]: new CustomMessage({
    message: 'tipo de unidad invalido',
    error: PatientMessagesEnum.UNIT_TYPE_INVALID,
  }),

  [PatientMessagesEnum.CITY_INVALID]: new CustomMessage({
    message: 'ciudad invalida',
    error: PatientMessagesEnum.CITY_INVALID,
  }),

  [PatientMessagesEnum.UUID_INVALID]: new CustomMessage({
    message: 'uuid invalido',
    error: PatientMessagesEnum.UUID_INVALID,
  }),
  [PatientMessagesEnum.OBJECT_IS_INVALID]: new CustomMessage({
    message: 'Objeto invalido',
    error: PatientMessagesEnum.OBJECT_IS_INVALID,
  }),

  [PatientMessagesEnum.IMAGE_POST_INVALID]: new CustomMessage({
    message: 'Url de la imagen invalida',
    error: PatientMessagesEnum.IMAGE_POST_INVALID,
  }),
  [PatientMessagesEnum.USER_UUID_INVALID]: new CustomMessage({
    message: 'uuid de usuario no pertenece a la publicacion',
    error: PatientMessagesEnum.USER_UUID_INVALID,
  }),
};
