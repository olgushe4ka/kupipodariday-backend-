import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  giftId?: number;
}
