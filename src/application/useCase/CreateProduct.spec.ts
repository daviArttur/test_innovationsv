import { Product } from 'src/domain/entity/Product';
import { ProductStatus } from 'src/domain/interface';
import { UUIDAdapter } from 'src/infra/adapter/UUIDAdapter';
import { ProductRepositoryMock } from 'test/mock/repository';
import { DuplicatedProductNameError } from '../errors/DuplicatedProductNameError';
import { IdService } from '../service/IdService';
import { CreateProduct } from './CreateProduct';

describe('test CreateProduct useCase', () => {
  it('should create a Product', async () => {
    const dto = {
      category: 'any',
      id: 'testId',
      name: 'iphone',
      quantity: 10,
      status: ProductStatus.ACTIVE,
    };

    const newProduct = await new CreateProduct(
      dto,
      new ProductRepositoryMock(),
      new IdService(new UUIDAdapter()),
    ).exec();

    expect(newProduct).toBeInstanceOf(Product);
  });

  it('should throw error when create product', async () => {
    const dto = {
      category: 'any',
      id: 'testId',
      name: '',
      quantity: 10,
      status: ProductStatus.ACTIVE,
    };

    let error: DuplicatedProductNameError;

    try {
      await new CreateProduct(
        dto,
        new ProductRepositoryMock(),
        new IdService(new UUIDAdapter()),
      ).exec();
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(DuplicatedProductNameError);
  });
});
