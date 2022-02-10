import { Controller, Get, UseGuards, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidationPipe } from './validation.pipe';
import { VerifyUserGuard } from './verify-user.guard';

// see https://docs.nestjs.com/controllers

// App's default controller doesn't define a namespace because it handles top-level routes
@Controller()
// Add global nest guard
@UseGuards(VerifyUserGuard)
// Add global nest pipe (these can also be added specifically to @Get, @Post, etc.)
@UsePipes(ValidationPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Define individual function for specific method, such as GET /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
