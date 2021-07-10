import { 
  Column, 
  Entity, 
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Expose } from "class-transformer"

import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // a hora que for 'expor' a entidade irá criar um nome a mais por ex: 'hashtag...'
  @Expose({name: "nameCustom"})
  nameCustom(): string {
    return `#${this.name}`
  } 

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Tag }