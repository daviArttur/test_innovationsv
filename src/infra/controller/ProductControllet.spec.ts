import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from 'nestjs-prisma';
import { ProductRepositoryInfra } from '../repository/ProductRepository';
import { ProductController } from './ProductController';
import { createProductDtoMock } from '../../../test/mock/dto/CreateProduct.dto';
import request from 'supertest';

describe('test Product controller', () => {
  let app: INestApplication;
  let productId: string;

  beforeAll(async () => {
    await new PrismaService().products.deleteMany();
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductRepositoryInfra,
          useValue: new ProductRepositoryInfra(new PrismaService()),
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('test routes', async () => {
    const POST = await request(app.getHttpServer())
      .post('/products')
      .send({
        ...createProductDtoMock,
      });
    expect(POST.status).toBe(201);
    const bodyPOST = await POST.body;

    const UPDATE = await request(app.getHttpServer())
      .put(`/products/${bodyPOST.id}`)
      .send({
        ...createProductDtoMock,
      });
    expect(UPDATE.status).toBe(200);

    const GET = await request(app.getHttpServer()).get(`/products`);
    expect(GET.status).toBe(200);
    expect(await GET.body[0]).toBeDefined();

    const DELETE = await request(app.getHttpServer()).delete(
      `/products/${productId}`,
    );
    expect(DELETE.status).toBe(200);
  });
});
