import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Confirms that the request includes a valid Bearer Token
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
