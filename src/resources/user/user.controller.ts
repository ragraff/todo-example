import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { CreateUserDto } from './interfaces/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body(new ValidationPipe({ whitelist: true })) createUser: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(createUser);
  }
}
