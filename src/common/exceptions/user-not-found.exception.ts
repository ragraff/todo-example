import { EntityNotFoundException } from './entity-not-found.exception';

export class UserNotFoundException extends EntityNotFoundException {
  constructor(key: string, value: string) {
    super('user', key, value);
  }
}
