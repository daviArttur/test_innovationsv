import { ProductStatus } from '../interface';

export interface CreateProductDto {
  id: string;
  name: string;
  category: string;
  status?: ProductStatus;
  quantity: number;
}
