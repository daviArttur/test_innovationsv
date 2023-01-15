import { HttpException } from '@nestjs/common';
import { Exception } from './Exception';

describe('test ParseError', () => {
  it('show throw error ', () => {
    let error: Error;
    try {
      throw new Error(JSON.stringify({ mesage: 'test', status: 400 }));
    } catch (err) {
      try {
        throw new Exception(err.message);
      } catch (err) {
        error = err;
      }
    }
    expect(error).toBeInstanceOf(HttpException);
  });
});
