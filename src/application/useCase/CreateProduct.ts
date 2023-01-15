import { CreateProductDto } from 'src/domain/dto/create-product.dto';
import { Product } from 'src/domain/entity/Product';
import { ProductRepository } from 'src/domain/repository';
import { DuplicatedProductNameError } from '../errors/DuplicatedProductNameError';

export class CreateProduct {
  constructor(
    private dto: CreateProductDto,
    private productRepository: ProductRepository,
  ) {}

  async exec() {
    const product = new Product(this.dto);

    const validation = await this.productRepository.findOne(product.name);

    if (validation) throw new DuplicatedProductNameError();

    await this.productRepository.save(product);

    return product;
  }
}
