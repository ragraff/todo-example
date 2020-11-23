import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../shared/auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  @Get()
  getRunning(): string {
    return 'Api running.';
  }

  @Get('auth')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getRunningAuth(): string {
    return 'Api running with auth.';
  }
}
