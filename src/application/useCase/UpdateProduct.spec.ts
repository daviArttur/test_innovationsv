import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { Product } from 'src/domain/entity/Product';
import { ProductStatus } from 'src/domain/interface';
import { ProductRepositoryMock } from 'test/mock/repository';
import { UpdateProduct } from './UpdateProduct';

const dto: UpdateProductDto = {
  name: 'updatedNameTest',
  category: 'new category',
  quantity: 5,
  status: ProductStatus.INACTIVE,
};

describe('Test update product useCase', () => {
  it('should update an existent product', async () => {
    const updateResult = await new UpdateProduct(
      new ProductRepositoryMock(),
    ).update(dto);

    expect(updateResult).toBeInstanceOf(Product);
    expect(updateResult.category).toBe(dto.category);
    expect(updateResult.name).toBe(dto.name);
    expect(updateResult.quantity).toBe(dto.quantity);
    expect(updateResult.status).toBe(dto.status);
  });
});
