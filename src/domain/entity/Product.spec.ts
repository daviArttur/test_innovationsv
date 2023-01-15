import { ProductStatus } from '../interface';
import { Product } from './Product';

describe('test Product entity', () => {
  it('should be possible create a new Product', () => {
    const product = new Product({
      id: 'testId',
      category: 'electronic',
      name: 'Iphone X',
      quantity: 10,
      status: ProductStatus.ACTIVE,
    });

    expect(product).toBeInstanceOf(Product);
  });
});
