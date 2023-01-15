import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { ProductRepository } from 'src/domain/repository';

export class UpdateProduct {
  constructor(private productRepository: ProductRepository) {}

  async update(dto: UpdateProductDto, productId: string) {
    const repo = await this.productRepository.updateOne(dto, productId);

    return repo;
  }
}
