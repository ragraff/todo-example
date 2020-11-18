import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddBearerTokenInterceptor } from '../../common/interceptors/add-bearer-token.interceptor';
import { AuthService } from '../../shared/auth/auth.service';
import { LocalAuthGuard } from '../../shared/auth/guards/local-auth.guard';
import { LoginRequestDto } from './interfaces/login-request.dto';

/**
 * The session endpoints.
 */
@Controller('session')
@ApiTags('Session')
export class SessionController {
  constructor(private readonly authService: AuthService) {}

  // POST
  @UseGuards(LocalAuthGuard)
  @Post()
  @UseInterceptors(AddBearerTokenInterceptor)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(@Body() loginRequestDto: LoginRequestDto): Promise<any> {
    return await this.authService.login(loginRequestDto);
  }
}
