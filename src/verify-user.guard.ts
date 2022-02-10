import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// see https://docs.nestjs.com/guards

@Injectable()
export class VerifyUserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validUsers = ['John', 'Anna', 'Nella'];

    // Read the request object from the execution context
    const req = context.switchToHttp().getRequest();

    // Check if user is in list of authorized users
    const userValid = validUsers.indexOf(req.data.user.id);

    // Send request to next guard or first nest interceptor
    return !!userValid;
  }
}
