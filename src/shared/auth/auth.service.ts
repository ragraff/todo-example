import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserNotFoundException } from '../../common/exceptions/user-not-found.exception';
import { LoginRequestDto } from '../../resources/session/interfaces/login-request.dto';
import { UserService } from '../../resources/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Logs the user in and returns the access token.
   * @param param0 The user email
   * @param roleName The role for the user
   */
  async login({ email }: LoginRequestDto): Promise<any> {
    const user = await this.userService.findUser(email);
    if (user == null) {
      throw new UserNotFoundException('email', email);
    }

    const payload = { email: user.email, userId: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * Validates the user using email and encrypted password
   * @param email The user's email
   * @param password The user's encrypted password
   */
  async validateUser(email: string, password: string): Promise<any | null> {
    const user = await this.userService.findUser(email);

    if (user != null && (await user.comparePassword(password))) {
      return { email: user.email, userId: user.id };
    }
    return null;
  }
}
