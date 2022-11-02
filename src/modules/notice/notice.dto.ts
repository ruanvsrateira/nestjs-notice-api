import { IsString } from 'class-validator';

export class NoticeDTO {
  @IsString()
  public title!: string;

  @IsString()
  public description!: string;

  @IsString()
  public body!: string;

  @IsString()
  public createdAt!: string;

  @IsString()
  public updatedAt!: string;
}
