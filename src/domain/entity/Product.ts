import { CreateProductDto } from '../dto/create-product.dto';
import { ProductStatus } from '../interface';

interface Dates {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export class Product {
  readonly id: string;
  readonly category: string;
  readonly name: string;
  readonly quantity: number;
  readonly status: ProductStatus;
  private createdAt?: Date;
  private updatedAt?: Date;
  private deletedAt: Date | null;

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

  set setDates(date: Dates) {
    this.createdAt = date.createdAt;
    this.updatedAt = date.updatedAt;
    this.deletedAt = date.deletedAt;
  }

  get getDates() {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
