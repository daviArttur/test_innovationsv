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
    expect(product.id).toBe('testId');
    expect(product.category).toBe('electronic');
    expect(product.quantity).toBe(10);
    expect(product.name).toBe('Iphone X');
    expect(product.status).toBe(ProductStatus.ACTIVE);
  });

  it('should create a product with status INACTIVE because quantity <= 0', () => {
    const product = new Product({
      id: 'testId',
      category: 'electronic',
      name: 'Iphone X',
      quantity: 0,
      status: ProductStatus.ACTIVE,
    });

    expect(product.status).toBe(ProductStatus.INACTIVE);
  });

  it('should create a product with status INACTIVE with quantity >= 1', () => {
    const product = new Product({
      id: 'testId',
      category: 'electronic',
      name: 'Iphone X',
      quantity: 1,
      status: ProductStatus.INACTIVE,
    });

    expect(product.status).toBe(ProductStatus.INACTIVE);
  });
});
