import { Injectable, NestMiddleware } from '@nestjs/common';

// See https://docs.nestjs.com/middleware

@Injectable()
export class ReqExtenderMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Extend the request object with additional functions or data
    req.data = { user: { id: 'John' }};
    req.functions = { getUser: () => { return req.data.user }}

    // Send request to next express middleware or first guard in nest execution context
    // See https://www.darraghoriordan.com/2021/11/03/nest-cheatsheet-interceptor-middleware-guard/
    next();
  }
}
