import { ProductRepositoryMock } from 'test/mock/repository';
import { DeleteProduct } from './DeleteProduct';

describe('test DeleteProduct', () => {
  it('should delete a product', async () => {
    const deleteResult = await new DeleteProduct(
      new ProductRepositoryMock(),
    ).delete('test id');

    expect(deleteResult).toBeUndefined();
  });
});
