import { CustomMessage } from 'src/shared/errors/custom.error';
import { PostMessagesEnum } from '../enums/Post.enum';

export type PostMessagesType = {
  [key in PostMessagesEnum]: CustomMessage;
};
