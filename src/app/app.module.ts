import { Module } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { TodoModule } from '../resources/todo/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const getTypeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'changeme',
  database: 'todo-example',
  entities: ['../resources/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  legacySpatialSupport: false,
  dropSchema: true,
};

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot({ ...getTypeOrmOptions })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
