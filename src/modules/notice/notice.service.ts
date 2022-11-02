import { Injectable, NotFoundException } from '@nestjs/common';
import { NoticeDTO } from './notice.dto';
import { Notice, NoticeRepository } from './notice.schema';

@Injectable()
export class NoticeService {
  async getAllNotices(): Promise<NoticeDTO[]> {
    const notices = await NoticeRepository.find({});

    return notices;
  }

  async createNewNotice(notice: NoticeDTO): Promise<Notice> {
    return await NoticeRepository.create(notice);
  }

  async deleteNoticeById(id: string): Promise<Notice> {
    const notice = await NoticeRepository.findById(id);

    if (!notice) throw new NotFoundException('notice not founded by this id');

    await NoticeRepository.findByIdAndDelete(id);

    return notice;
  }

  async updateNoticeById(id: string, notice: NoticeDTO): Promise<Notice> {
    const noticeExist = await NoticeRepository.findById(id);

    if (!noticeExist)
      throw new NotFoundException('notice not founded by this id');

    return await NoticeRepository.findByIdAndUpdate(id, notice);
  }
}
