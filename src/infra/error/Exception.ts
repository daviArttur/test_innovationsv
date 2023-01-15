import { HttpException } from '@nestjs/common';

interface ParsedError {
  message: string;
  status: number;
}

export class Exception {
  constructor(error: ParsedError) {
    return new HttpException(error.message, error.status);
  }
}
