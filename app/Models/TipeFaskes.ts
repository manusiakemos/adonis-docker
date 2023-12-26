import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class TipeFaskes extends BaseModel {
  public static table = "tipe_faskes";

  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
