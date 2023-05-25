import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wishlist } from '../../wishlists/entities/wishlists.entity';
import { Offer } from 'src/offers/entities/offers.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ length: 200, default: 'Пока ничего не рассказал о себе' })
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
  wishlists: Wishlist[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
