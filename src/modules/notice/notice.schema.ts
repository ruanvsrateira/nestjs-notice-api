import { prop, getModelForClass } from '@typegoose/typegoose';

export class Notice {
  @prop({ type: () => String, required: true })
  public title: string;

  @prop({ type: () => String, required: true })
  public description: string;

  @prop({ type: () => String, required: true })
  public body: string;

  @prop({ type: () => String, required: true })
  public createdAt: string;

  @prop({ type: () => String, required: true })
  public updatedAt: string;
}

export const NoticeRepository = getModelForClass(Notice);
