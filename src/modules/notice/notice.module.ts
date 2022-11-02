import { NoticeService } from './notice.service';
import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';

@Module({
  imports: [],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule {}
