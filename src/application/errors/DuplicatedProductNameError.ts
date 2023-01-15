export class DuplicatedProductNameError extends Error {
  constructor() {
    super(
      JSON.stringify({
        message: 'Já existe um produto cadastrado com esse nome',
        status: 422,
      }),
    );
  }
}
