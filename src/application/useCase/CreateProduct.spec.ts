import { Product } from 'src/domain/entity/Product';
import { createProductDtoMock } from 'test/mock/dto/CreateProduct.dto';
import { ProductRepositoryMock } from 'test/mock/repository';
import { DuplicatedProductNameError } from '../errors/DuplicatedProductNameError';
import { CreateProduct } from './CreateProduct';

describe('test CreateProduct useCase', () => {
  it('should create a Product', async () => {
    const newProduct = await new CreateProduct(
      createProductDtoMock,
      new ProductRepositoryMock(),
    ).exec();

    expect(newProduct).toBeInstanceOf(Product);
  });

  it('should throw error when create product', async () => {
    const dto = { ...createProductDtoMock, name: '' };

    let error: DuplicatedProductNameError;

    try {
      await new CreateProduct(dto, new ProductRepositoryMock()).exec();
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(DuplicatedProductNameError);
  });
});
