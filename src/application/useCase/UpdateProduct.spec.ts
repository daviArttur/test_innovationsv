import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { Product } from 'src/domain/entity/Product';
import { ProductStatus } from 'src/domain/interface';
import { ProductRepositoryMock } from 'test/mock/repository';
import { DuplicatedProductNameError } from '../errors/DuplicatedProductNameError';
import { UpdateProduct } from './UpdateProduct';

const dto: UpdateProductDto = {
  name: 'updatedNameTest',
  category: 'new category',
  quantity: 5,
  status: ProductStatus.INACTIVE,
};

describe('Test update product useCase', () => {
  it('should update an existent product', async () => {
    const repo = new ProductRepositoryMock();
    const repoSpy = jest.spyOn(repo, 'updateOne');
    const updateResult = await new UpdateProduct(repo).update(
      dto,
      'example id',
    );

    expect(repoSpy).toHaveBeenCalledTimes(1);
    expect(updateResult).toBeInstanceOf(Product);
    expect(updateResult.category).toBe(dto.category);
    expect(updateResult.name).toBe(dto.name);
    expect(updateResult.quantity).toBe(dto.quantity);
    expect(updateResult.status).toBe(dto.status);
  });

  it('should error because nome is duplicated', async () => {
    const repo = new ProductRepositoryMock();
    const repoSpy = jest.spyOn(repo, 'findOne');

    let error: Error;
    try {
      await new UpdateProduct(repo).update({ ...dto, name: '' }, 'example id');
    } catch (err) {
      error = err;
    }

    expect(repoSpy).toHaveBeenCalledTimes(1);
    expect(error).toBeInstanceOf(DuplicatedProductNameError);
  });
});
