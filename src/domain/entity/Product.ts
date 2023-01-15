import { CreateProductDto } from '../dto/create-product.dto';
import { ProductStatus } from '../interface';

export class Product {
  id: string;
  category: string;
  name: string;
  quantity: number;
  status: ProductStatus;

  constructor(data: CreateProductDto) {
    this.id = data.id;
    this.category = data.category;
    this.quantity = data.quantity;
    this.name = data.name;
    this.status = this.calculateStatus(data.status);
  }

  private calculateStatus(dtoStatus?: ProductStatus) {
    if (this.quantity <= 0) return ProductStatus.INACTIVE;
    if (!dtoStatus) return ProductStatus.ACTIVE;
    else return dtoStatus;
  }
}
