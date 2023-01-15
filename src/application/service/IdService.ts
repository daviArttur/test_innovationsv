export interface IdAdapter {
  generate: () => string;
}

export class IdService {
  constructor(private adapter: IdAdapter) {}

  generate() {
    return this.adapter.generate();
  }
}
