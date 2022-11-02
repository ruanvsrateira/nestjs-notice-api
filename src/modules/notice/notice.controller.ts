import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { NoticeDTO } from './notice.dto';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}

  @Get()
  async index() {
    return await this.noticeService.getAllNotices();
  }

  @Post()
  async store(@Body() notice: NoticeDTO) {
    return await this.noticeService.createNewNotice(notice);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.noticeService.deleteNoticeById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() notice: NoticeDTO,
  ) {
    return await this.noticeService.updateNoticeById(id, notice);
  }
}
