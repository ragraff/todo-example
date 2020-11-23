import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './interfaces/create-todo.dto';
import { UpdateTodoDto } from './interfaces/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':todoId')
  async getTodo(@Param('todoId') todoId: string): Promise<Todo> {
    return this.todoService.getTodo(todoId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put()
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.updateTodo(updateTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':todoId')
  async deleteTodo(@Param('todoId') todoId: string): Promise<DeleteResult> {
    return this.todoService.deleteTodo(todoId);
  }
}
