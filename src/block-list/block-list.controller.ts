import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { BlockListDto } from './dto/blockList.dto';
import { AddBlockItemDto } from './dto/addBlockItem.dto';
import { BlockListQueryDto } from './dto/BlockListQuery.dto';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info-decorator.decorator';
import { GetSessionInfoDto } from '../auth/dto/GetSessionInfo.dto';
import { BlockListService } from './block-list.service';
import { BlockItemDto } from './dto/blockItem.dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockListDto,
  })
  addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({ type: BlockItemDto })
  async removeBlockItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.removeItem(session.id, id);
  }
}
