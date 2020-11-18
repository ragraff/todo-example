import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor(entityName: string, key: string, value: string) {
    super(
      `The ${entityName} with ${key}: "${value}" does not exist`,
      HttpStatus.NOT_FOUND,
    );
  }
}
