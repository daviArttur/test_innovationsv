import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IdService } from 'src/application/service/IdService';
import { CreateProduct } from 'src/application/useCase/CreateProduct';
import { DeleteProduct } from 'src/application/useCase/DeleteProduct';
import { UpdateProduct } from 'src/application/useCase/UpdateProduct';
import { UUIDAdapter } from '../adapter/UUIDAdapter';
import { CreateProductDtoInfra } from '../dto/CreateProductDto';
import { UpdateProductDtoInfra } from '../dto/UpdateProductDto';
import { Exception } from '../error/Exception';
import { ParamIdValidator } from '../pipe/id.pipe';
import { ProductRepositoryInfra } from '../repository/ProductRepository';

@Controller('/products')
export class ProductController {
  constructor(private repo: ProductRepositoryInfra) {}

  @Post()
  async create(@Body() dto: CreateProductDtoInfra) {
    const id = new IdService(new UUIDAdapter()).generate();

    try {
      const result = await new CreateProduct({ ...dto, id }, this.repo).exec();
      return result;
    } catch (err) {
      throw new Exception(err.message);
    }
  }

  @Get()
  async get() {
    try {
      const result = await this.repo.findAll();

      return result;
    } catch (err) {
      throw new Exception(err);
    }
  }

  @Put('/:productId')
  async update(
    @Body() dto: UpdateProductDtoInfra,
    @Param('productId', ParamIdValidator) productId: string,
  ) {
    try {
      const result = await new UpdateProduct(this.repo).update(dto, productId);

      return result;
    } catch (err) {
      throw new Exception(err.message);
    }
  }

  @Delete('/:productId')
  async delete(@Param('productId', ParamIdValidator) productId: string) {
    try {
      const result = await new DeleteProduct(this.repo).delete(productId);

      return result;
    } catch (err) {
      throw new Exception(err.message);
    }
  }
}
