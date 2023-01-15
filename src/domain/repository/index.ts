import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entity/Product';

export interface ProductRepository {
  save: (product: Product) => Promise<void>;
  findAll: () => Promise<Product>;
  updateOne: (product: UpdateProductDto) => Promise<void>;
  deleteOne: (productId: string) => Promise<void>;
}
