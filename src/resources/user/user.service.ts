import { Injectable } from '@nestjs/common';
import { UserExistsException } from '../../common/exceptions/user-exists.exception';
import { User } from './entities/user.entity';
import { CreateUserDto } from './interfaces/create-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    if ((await this.userExists(email)) === true) {
      throw new UserExistsException();
    }

    return User.create(createUserDto).save();
  }

  async userExists(email: string): Promise<boolean> {
    return (
      (await User.createQueryBuilder('u')
        .where('u.email=:email', { email: email })
        .getCount()) !== 0
    );
  }

  async findUser(email: string): Promise<User> {
    return User.createQueryBuilder('u')
      .where('u.email=:email', { email: email })
      .getOne();
  }
}
