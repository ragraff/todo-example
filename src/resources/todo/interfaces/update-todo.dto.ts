import { IsUUID } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends CreateTodoDto {
  @IsUUID()
  id: string;
}
