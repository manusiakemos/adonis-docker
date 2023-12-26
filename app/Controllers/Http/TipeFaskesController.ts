import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import TipeFaskes from "App/Models/TipeFaskes";
import { schema } from "@adonisjs/validator/build/src/Schema";
import { rules } from "@adonisjs/validator/build/src/Rules";

export default class TipeFaskesController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1 } = request.qs();
    const data = await TipeFaskes.query()
      .paginate(page);
    return response.json({
      code: 200,
      text: "ok",
      message: "tipe faskes",
      path: request.url(true),
      record: data
    });
  }

  public async store({ request, response }: HttpContextContract) {
    const mySchema = schema.create({
      nama: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(225),
        rules.unique({
          table: "tipe_faskes",
          column: "nama"
        })
      ])
    });
    const payload = await request.validate({ schema: mySchema });
    const data: TipeFaskes = await TipeFaskes.create(payload);

    return response.json({
      code: 200,
      text: "ok",
      message: "tipe faskes",
      path: request.url(true),
      record: data
    });
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    const data = await TipeFaskes.find(id);
    return response.json({
      code: 200,
      text: "ok",
      message: "tipe faskes",
      path: request.url(true),
      record: data
    });
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params();
    const mySchema = schema.create({
      nama: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(225),
        rules.unique({
          table: "tipe_faskes",
          column: "nama",
          whereNot: { id }
        })
      ])
    });
    const payload = await request.validate({ schema: mySchema });
    const data = await TipeFaskes
      .findOrFail(id);
    data.nama = payload.nama;
    const save = await data.save();

    return response.json({
      code: 200,
      text: "ok",
      message: "tipe faskes",
      path: request.url(true),
      record: save
    });
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params();
    const data: TipeFaskes = await TipeFaskes.findOrFail(id);
    await data.delete();
    return response.json({
      code: 200,
      text: "ok",
      message: "tipe faskes",
      path: request.url(true),
      record: data
    });
  }
}
