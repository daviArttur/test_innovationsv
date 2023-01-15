import { IsNotEmpty, IsNumber, IsString, Matches, Min } from 'class-validator';
import { ProductStatus } from 'src/domain/interface';

export class CreateProductDtoInfra {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/(ACTIVE)|(INACTIVE)/)
  status: ProductStatus;

  @Min(0)
  @IsNumber()
  quantity: number;
}
