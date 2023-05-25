import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Wishlist } from './entities/wishlists.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private userRepository: Repository<Wishlist>,
  ) {}

  async create(data: Partial<Wishlist>): Promise<Wishlist> {
    const wishlist = this.userRepository.create(data);
    return this.userRepository.save(wishlist);
  }

  async findOne(query: Partial<Wishlist>): Promise<Wishlist> {
    const options: FindOneOptions<Wishlist> = { where: query };
    return this.userRepository.findOne(options);
  }

  async findMany(query: Partial<Wishlist>): Promise<Wishlist[]> {
    const options: FindManyOptions<Wishlist> = { where: query };
    return this.userRepository.find(options);
  }

  async updateOne(
    query: Partial<Wishlist>,
    update: Partial<Wishlist>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(query, update);
  }

  async removeOne(query: Partial<Wishlist>): Promise<DeleteResult> {
    return this.userRepository.delete(query);
  }
}
