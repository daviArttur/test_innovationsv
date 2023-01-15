import { CreateProductDto } from 'src/domain/dto/create-product.dto';
import { ProductStatus } from 'src/domain/interface';

export const createProductDtoMock: CreateProductDto = {
  category: 'any',
  id: 'testId',
  name: 'iphone',
  quantity: 10,
  status: ProductStatus.ACTIVE,
};
