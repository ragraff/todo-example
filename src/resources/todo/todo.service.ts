import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './interfaces/create-todo.dto';
import { UpdateTodoDto } from './interfaces/update-todo.dto';

@Injectable()
export class TodoService {
  async getTodo(todoId: string): Promise<Todo> {
    return Todo.findOneOrFail(todoId);
  }

  async getTodos() {
    return Todo.find();
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    return Todo.create(createTodoDto).save();
  }

  async updateTodo(updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return (await Todo.preload(updateTodoDto)).save();
  }

  async deleteTodo(todoId: string): Promise<DeleteResult> {
    return Todo.delete(todoId);
  }
}
