import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Confirms that the request includes a valid Bearer Token and that the token includes the admin role
 */
@Injectable()
export class JwtAdminAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    return result && request.user.role === 'admin';
  }
}
