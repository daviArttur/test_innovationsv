import { IdAdapter } from 'src/application/service/IdService';
import { v4 as uuid } from 'uuid';

export class UUIDAdapter implements IdAdapter {
  generate() {
    return uuid();
  }
}
