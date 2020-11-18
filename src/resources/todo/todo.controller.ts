import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './interfaces/create-todo.dto';
import { UpdateTodoDto } from './interfaces/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':todoId')
  async getTodo(@Param('todoId') todoId: string): Promise<Todo> {
    return this.todoService.getTodo(todoId);
  }

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @Put()
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.updateTodo(updateTodoDto);
  }

  @Delete(':todoId')
  async deleteTodo(@Param('todoId') todoId: string): Promise<DeleteResult> {
    return this.todoService.deleteTodo(todoId);
  }
}
