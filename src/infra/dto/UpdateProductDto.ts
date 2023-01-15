import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Min,
} from 'class-validator';
import { ProductStatus } from 'src/domain/interface';

export class UpdateProductDtoInfra {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  category: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/(ACTIVE)|(INACTIVE)/)
  @IsOptional()
  status: ProductStatus;

  @Min(0)
  @IsNumber()
  @IsOptional()
  quantity: number;
}
