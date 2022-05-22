import { PostMessagesEnum } from '../enums/post.enum';

export class PostNotFoundError extends Error {
  constructor() {
    super(PostMessagesEnum.NOT_FOUND);
  }
}
