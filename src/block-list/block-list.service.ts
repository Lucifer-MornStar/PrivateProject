import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { BlockListQueryDto } from './dto/BlockListQuery.dto';
import { AddBlockItemDto } from './dto/addBlockItem.dto';
import { BlockItemDto } from './dto/blockItem.dto';

@Injectable()
export class BlockListService {
  constructor(private db: DbService) {}

  create(userId: number) {
    return this.db.blockList.create({ data: { ownerId: userId } });
  }

  async getByUser(userId: number, query: BlockListQueryDto) {
    const blocklist = await this.db.blockList.findUnique({
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
    if (blocklist) {
      return blocklist;
    } else {
      throw new UnauthorizedException();
    }
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blocklist = await this.db.blockList.findUnique({
      where: { ownerId: userId },
    });
    if (blocklist) {
      return this.db.blockItem.create({
        data: { blockListId: blocklist.id, ...data },
      });
    } else {
      throw new UnauthorizedException();
    }
  }

  async removeItem(userId: number, itemId: number) {
    const blocklist = await this.db.blockList.findUnique({
      where: { ownerId: userId },
    });
    if (blocklist) {
      return this.db.blockItem.delete({
        where: { blockListId: blocklist.id, id: itemId },
      });
    } else {
      throw new UnauthorizedException();
    }
  }
}
