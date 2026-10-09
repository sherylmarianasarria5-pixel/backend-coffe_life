import type { HttpContext } from '@adonisjs/core/http'
import Tratamiento from '#models/tratamiento'

export default class TratamientosController {
  async index({ response }: HttpContext) {
    const tratamientos = await Tratamiento.query().preload('tipoTratamiento')
    return response.ok({
      message: 'Lista de tratamientos',
      data: tratamientos,
    })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'idTipoTratamiento',
      'nombre',
      'descripcion',
    ])
    const tratamiento = await Tratamiento.create(data)
    return response.created({
      message: 'Tratamiento creado correctamente',
      data: tratamiento,
    })
  }

  async show({ params, response }: HttpContext) {
    const tratamiento = await Tratamiento.query()
      .where('id_tratamiento', params.id)
      .preload('tipoTratamiento')
      .firstOrFail()
    return response.ok({
      message: 'Tratamiento encontrado',
      data: tratamiento,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const tratamiento = await Tratamiento.findOrFail(params.id)
    const data = request.only([
      'idTipoTratamiento',
      'nombre',
      'descripcion',
    ])
    tratamiento.merge(data)
    await tratamiento.save()
    return response.ok({
      message: 'Tratamiento actualizado correctamente',
      data: tratamiento,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const tratamiento = await Tratamiento.findOrFail(params.id)
    await tratamiento.delete()
    return response.ok({
      message: 'Tratamiento eliminado correctamente',
    })
  }
}