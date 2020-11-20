import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      // Overwrites which field is the username
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  /**
   * Validates the email/password combination and throws exception on failure or returns the user on success.
   * @param email
   * @param password
   */
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (user == null) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
