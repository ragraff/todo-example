import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { TodoModule } from '../resources/todo/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

function getTypeOrmOptions(): Record<string, unknown> {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'changeme',
    database: 'todo-example',
    synchronize: true,
    autoLoadEntities: true,
    legacySpatialSupport: false,
  };
}

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(getTypeOrmOptions())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
