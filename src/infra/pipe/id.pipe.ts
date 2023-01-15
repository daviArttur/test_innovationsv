import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParamIdValidator implements PipeTransform {
  transform(id: string): string {
    if (id) {
      return id;
    }

    throw new HttpException('preencha um id válido', 400);
  }
}
