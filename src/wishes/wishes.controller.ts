import { Controller, Get, Post, UseGuards, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WishesService } from './wishes.service';
import { Wish } from './entities/wishes.entity';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishService: WishesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createWish(@Body() createGiftDto: any): Promise<Wish> {
    return this.wishService.create(createGiftDto);
  }

  @Get()
  async getAllWish(): Promise<Wish[]> {
    return this.wishService.findMany({});
  }

  @Get(':id')
  async getWishById(@Param('id') id: string): Promise<Wish> {
    return this.wishService.findOne({ id });
  }
}
