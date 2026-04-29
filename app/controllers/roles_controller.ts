import type { HttpContext } from '@adonisjs/core/http'
import CatRol from '#models/cat_rol'

export default class RolesController {
  async index({ response }: HttpContext) {
    return response.ok(await CatRol.all())
  }

  async store({ request, response }: HttpContext) {
    const rol = await CatRol.create(request.only(['nombre_rol', 'descripcion']))
    return response.created({ message: 'Rol creado', data: rol })
  }

  async show({ params, response }: HttpContext) {
    return response.ok(await CatRol.findOrFail(params.id))
  }

  async update({ params, request, response }: HttpContext) {
    const rol = await CatRol.findOrFail(params.id)
    rol.merge(request.only(['nombre_rol', 'descripcion']))
    await rol.save()

    return response.ok({ message: 'Rol actualizado', data: rol })
  }

  async destroy({ params, response }: HttpContext) {
    const rol = await CatRol.findOrFail(params.id)
    await rol.delete()

    return response.ok({ message: 'Rol eliminado' })
  }
}
