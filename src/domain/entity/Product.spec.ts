import { ProductStatus } from '../interface';
import { Product } from './Product';

const ProductMock = {
  id: 'testId',
  category: 'electronic',
  name: 'Iphone X',
};

describe('test Product entity', () => {
  it('should be possible create a new Product', () => {
    const product = new Product({
      id: ProductMock.id,
      category: ProductMock.category,
      name: ProductMock.name,
      quantity: 10,
      status: ProductStatus.ACTIVE,
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBe(ProductMock.id);
    expect(product.category).toBe(ProductMock.category);
    expect(product.quantity).toBe(10);
    expect(product.name).toBe(ProductMock.name);
    expect(product.status).toBe(ProductStatus.ACTIVE);
  });

  it('should create a product with status INACTIVE because quantity <= 0', () => {
    const product = new Product({
      id: ProductMock.id,
      category: ProductMock.category,
      name: ProductMock.name,
      quantity: 0,
      status: ProductStatus.ACTIVE,
    });

    expect(product.status).toBe(ProductStatus.INACTIVE);
  });

  it('should create a product with status INACTIVE with quantity >= 1', () => {
    const product = new Product({
      id: ProductMock.id,
      category: ProductMock.category,
      name: ProductMock.name,
      quantity: 1,
      status: ProductStatus.INACTIVE,
    });

    expect(product.status).toBe(ProductStatus.INACTIVE);
  });
});
