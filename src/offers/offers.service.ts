import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Offer } from './entities/offers.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private userRepository: Repository<Offer>,
  ) {}

  async create(data: Partial<Offer>): Promise<Offer> {
    const offer = this.userRepository.create(data);
    return this.userRepository.save(offer);
  }

  async findOne(query: Partial<Offer>): Promise<Offer> {
    const options: FindOneOptions<Offer> = { where: query };
    return this.userRepository.findOne(options);
  }

  async findMany(query: Partial<Offer>): Promise<Offer[]> {
    const options: FindManyOptions<Offer> = { where: query };
    return this.userRepository.find(options);
  }

  async updateOne(
    query: Partial<Offer>,
    update: Partial<Offer>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(query, update);
  }

  //   async removeOne(query: Partial<Offer>): Promise<DeleteResult> {
  //     return this.userRepository.delete(query);
  //   }

  async removeOne(condition: Partial<Offer>): Promise<DeleteResult> {
    return this.userRepository.delete(condition);
  }

  //   async removeOne(condition: Partial<Offer>): Promise<Offer> {
  //     return this.userRepository.delete(condition).then((result) => {
  //       if (result.affected > 0) {
  //         const deletedOffer = this.userRepository.create(result.raw[0]);
  //         return deletedOffer;
  //       } else {
  //         return null;
  //       }
  //     });
  //   }
}
