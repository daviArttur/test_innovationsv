import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { ProductRepository } from 'src/domain/repository';
import { DuplicatedProductNameError } from '../errors/DuplicatedProductNameError';

export class UpdateProduct {
  constructor(private productRepository: ProductRepository) {}

  async update(dto: UpdateProductDto, productId: string) {
    const validation = await this.productRepository.findOne(dto.name);

    if (validation) throw new DuplicatedProductNameError();

    const repo = await this.productRepository.updateOne(dto, productId);

    return repo;
  }
}
