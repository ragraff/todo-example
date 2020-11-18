import { Module } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { SessionModule } from '../resources/session/session.module';
import { TodoModule } from '../resources/todo/todo.module';
import { UserModule } from '../resources/user/user.module';
import { AuthModule } from '../shared/auth/auth.module';
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
  // dropSchema: true,
};

@Module({
  imports: [
    AuthModule,
    SessionModule,
    TodoModule,
    UserModule,

    TypeOrmModule.forRoot({ ...getTypeOrmOptions }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
