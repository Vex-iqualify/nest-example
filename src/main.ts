import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './logger.interceptor';
import { ReqExtenderMiddleware } from './req-extender.middleware';

async function bootstrap() {
  // Create the nest (express with a wrapper) server
  const app = await NestFactory.create(AppModule);
  // Add a global express middleware
  app.use(ReqExtenderMiddleware);
  // Add a global nest interceptor
  app.useGlobalInterceptors(LoggerInterceptor);
  // Run on port 3000
  await app.listen(3000);
}
bootstrap();
