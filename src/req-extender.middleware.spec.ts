import { ReqExtenderMiddleware } from './req-extender.middleware';

describe('ReqExtenderMiddleware', () => {
  it('should be defined', () => {
    expect(new ReqExtenderMiddleware()).toBeDefined();
  });
});
