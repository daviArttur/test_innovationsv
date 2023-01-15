import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ProductController } from './infra/controller/ProductController';
import { ProductRepositoryInfra } from './infra/repository/ProductRepository';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ProductController],
  providers: [ProductRepositoryInfra],
})
export class AppModule {}
