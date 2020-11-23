import { Module } from '@nestjs/common';
import { AuthModule } from '../../shared/auth/auth.module';
import { UserModule } from '../user/user.module';
import { SessionController } from './session.controller';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [SessionController],
})
export class SessionModule {}
