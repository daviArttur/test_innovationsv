import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { Product } from 'src/domain/entity/Product';
import { ProductStatus } from 'src/domain/interface';
import { ProductRepository } from 'src/domain/repository';

export class ProductRepositoryMock implements ProductRepository {
  async save(product: Product) {
    return;
  }
  async findAll() {
    return [
      new Product({
        category: 'any',
        id: 'testId',
        name: 'iphone',
        quantity: 10,
        status: ProductStatus.ACTIVE,
      }),
    ];
  }
  async updateOne(dto: UpdateProductDto) {
    return new Product({
      category: 'any',
      id: 'testId',
      name: 'iphone',
      quantity: 10,
      status: ProductStatus.ACTIVE,
      ...dto,
    });
  }
  async deleteOne(productId: string) {
    return;
  }
  async findOne(productName: string): Promise<void | Product> {
    if (!productName) {
      return new Product({
        category: 'any',
        id: 'testId',
        name: 'iphone',
        quantity: 10,
        status: ProductStatus.ACTIVE,
      });
    }
  }
}
