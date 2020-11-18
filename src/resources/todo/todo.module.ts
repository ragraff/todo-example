import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { User } from '../user/entities/user.entity';
import { Todo } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TypeOrmModule.forFeature([User])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
