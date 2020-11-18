import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from '../../todo/entities/todo.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  // Side Effects
  /**
   * Hashes the password on insert and updates.
   */
  @BeforeInsert()
  @Exclude()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /**
   * Compares the instance password hash with the supplied hash.
   * @param attempt The encrypted string to compare to the stored password
   */
  @Exclude()
  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}
