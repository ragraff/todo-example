import { IsDateString, IsOptional, IsString } from 'class-validator';

/**
 * The object used to create a todo.
 */
export class CreateTodoDto {
  /**
   * The title of the todo.
   * @example Title
   */
  @IsString()
  title: string;

  /**
   * The description for the todo.
   * @example Description
   */
  @IsString()
  @IsOptional()
  description: string;

  @IsDateString()
  dueDate: Date;
}
