import { Module } from '@nestjs/common';
import { NoticeModule } from './modules/notice/notice.module';

@Module({
  imports: [NoticeModule],
})
export class AppModule {}
