import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'

export default class CategoriasController {
  async index({ response }: HttpContext) {
    return response.ok(await Categoria.all())
  }

  async store({ request, response }: HttpContext) {
    const categoria = await Categoria.create(request.only(['nombre_categoria', 'descripcion']))

    return response.created({
      message: 'Categoria creada',
      data: categoria,
    })
  }

  async show({ params, response }: HttpContext) {
    return response.ok(await Categoria.findOrFail(params.id))
  }

  async update({ params, request, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)

    categoria.merge(request.only(['nombre_categoria', 'descripcion']))

    await categoria.save()

    return response.ok({
      message: 'Categoria actualizada',
      data: categoria,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()

    return response.ok({
      message: 'Categoria eliminada',
    })
  }
}
