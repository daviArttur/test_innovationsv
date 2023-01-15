import { ProductStatus } from '../interface';

export class UpdateProductDto {
  status?: ProductStatus;
  name?: string;
  quantity?: number;
  category?: string;
}
