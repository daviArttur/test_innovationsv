import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UpdateProductDto } from 'src/domain/dto/update-product.dto';
import { Product } from 'src/domain/entity/Product';
import { ProductStatus } from 'src/domain/interface';
import { ProductRepository } from 'src/domain/repository';

@Injectable()
export class ProductRepositoryInfra implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async deleteOne(productId: string) {
    try {
      await this.prisma.products.update({
        where: {
          id: productId,
        },
        data: {
          deleted_at: new Date().toISOString(),
        },
      });
      return;
    } catch (err) {
      throw new HttpException(
        'Não foi possivél concluir essa ação no momento, estamos trabalhando para resolver',
        500,
      );
    }
  }

  async findAll() {
    try {
      const query = await this.prisma
        .$queryRaw`SELECT * FROM products WHERE deleted_at IS NULL`;

      return query;
    } catch (err) {
      throw new HttpException(
        'Não foi possivél concluir essa ação no momento, estamos trabalhando para resolver',
        500,
      );
    }
  }

  async findOne(productName: string) {
    try {
      await this.prisma.products.findUnique({
        where: {
          name: productName,
        },
      });
    } catch (err) {
      throw new HttpException(
        'Não foi possivél concluir essa ação no momento, estamos trabalhando para resolver',
        500,
      );
    }
  }

  async save(product: Product) {
    try {
      await this.prisma.products.create({
        data: {
          category: product.category,
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          status: product.status,
        },
      });
    } catch (err) {
      throw new HttpException(
        'Não foi possivél concluir essa ação no momento, estamos trabalhando para resolver',
        500,
      );
    }
  }

  async updateOne(dto: UpdateProductDto, productId: string) {
    try {
      const query = await this.prisma.products.update({
        where: {
          id: productId,
        },
        data: {
          ...dto,
        },
      });

      return new Product({
        category: query.category,
        id: query.id,
        name: query.name,
        quantity: query.quantity,
        status: query.status as ProductStatus,
      });
    } catch (err) {
      throw new HttpException(
        'Não foi possivél concluir essa ação no momento, estamos trabalhando para resolver',
        500,
      );
    }
  }
}
