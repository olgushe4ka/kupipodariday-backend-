import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { OffersService } from './offers.service';
import { CreateOfferDto } from '../utilits/сreate-offer.dto';
import { Offer } from './entities/offers.entity';

@Controller('offers')
export class OffersController {
  constructor(private readonly offerService: OffersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createOffer(
    @Req() req: Request,
    @Body() createOfferDto: CreateOfferDto[],
  ): Promise<Offer> {
    const userId = req.user['id'];
    const offer = await this.offerService.create(userId);

    return offer;
  }

  //   @Post(':id/hide')
  //   @UseGuards(AuthGuard('jwt'))
  //   async hideOffer(
  //     @Req() req: Request,
  //     @Param('id') id: string,
  //   ): Promise<Offer> {
  //     const userId = req.user['id'];
  //     const offer = await this.offerService.removeOne({ id });

  //     if (!offer) {
  //       throw new NotFoundException('Offer not found');
  //     }

  //     if (id !== userId) {
  //       throw new UnauthorizedException('Unauthorized');
  //     }

  //     return offer;
  //   }
}
