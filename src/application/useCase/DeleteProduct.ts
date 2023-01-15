import { ProductRepository } from 'src/domain/repository';

export class DeleteProduct {
  constructor(private productRepository: ProductRepository) {}

  async delete(productId: string) {
    await this.productRepository.deleteOne(productId);

    return;
  }
}
