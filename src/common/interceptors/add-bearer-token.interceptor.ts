import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* istanbul ignore file */

/**
 * This interceptor adds the Bearer token to the Authorization header.
 */
@Injectable()
export class AddBearerTokenInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        _context
          .switchToHttp()
          .getResponse()
          .header('Authorization', `Bearer ${data.access_token}`);
        return data;
      }),
    );
  }
}
