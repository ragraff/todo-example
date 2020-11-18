import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return [
      { name: 'Todo 1' },
      { name: 'Todo 2' },
      { name: 'Todo 3' },
      { name: 'Todo 4' },
    ];
  }
}
