import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// see https://docs.nestjs.com/interceptors

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Read the request object from the execution context
    const req = context.switchToHttp().getRequest();

    // Log the URL requested
    console.log(`Requested ${req.method}${req.url}`);

    const now = Date.now();

    // Send request to next interceptor or first nest pipe
    // After the request is handled by the controller and service, log how long the server took to handle it
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}
