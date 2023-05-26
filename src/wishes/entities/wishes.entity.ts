import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wishlist } from '../../wishlists/entities/wishlists.entity';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 250 })
  name: string;

  @Column()
  link: string;

  @Column()
  image: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  raised: number;

  @Column({ length: 1024 })
  description: string;

  @ManyToMany(() => User)
  @JoinTable()
  offers: User[];

  @Column()
  copied: number;

  @ManyToOne(() => Wishlist, (wishlist) => wishlist.name)
  wishlist: Wishlist;
}
