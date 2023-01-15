import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { ProductRepository } from 'src/domain/repository';

export class UpdateProduct {
  constructor(private productRepository: ProductRepository) {}

  async update(dto: UpdateProductDto) {
    const repo = await this.productRepository.updateOne(dto);

    return repo;
  }
}
