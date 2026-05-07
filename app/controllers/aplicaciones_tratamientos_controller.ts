import type { HttpContext } from '@adonisjs/core/http'
import AplicacionesTratamiento from '#models/aplicaciones_tratamiento'

export default class AplicacionesTratamientosController {
  async index({ response }: HttpContext) {
    const aplicaciones = await AplicacionesTratamiento.query()
      .preload('usuario')
    return response.ok({
      message: 'Lista de aplicaciones de tratamiento',
      data: aplicaciones,
    })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'idRecTratamiento',
      'dosis',
      'frecuencia',
      'observaciones',
      'idUsuario',
    ])
    const aplicacion = await AplicacionesTratamiento.create(data)
    return response.created({
      message: 'Aplicacion de tratamiento creada correctamente',
      data: aplicacion,
    })
  }

  async show({ params, response }: HttpContext) {
    const aplicacion = await AplicacionesTratamiento.query()
      .where('id_aplicacion', params.id)
      .preload('usuario')
      .firstOrFail()
    return response.ok({
      message: 'Aplicacion de tratamiento encontrada',
      data: aplicacion,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const aplicacion = await AplicacionesTratamiento.findOrFail(params.id)
    const data = request.only([
      'idRecTratamiento',
      'dosis',
      'frecuencia',
      'observaciones',
      'idUsuario',
    ])
    aplicacion.merge(data)
    await aplicacion.save()
    return response.ok({
      message: 'Aplicacion de tratamiento actualizada correctamente',
      data: aplicacion,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const aplicacion = await AplicacionesTratamiento.findOrFail(params.id)
    await aplicacion.delete()
    return response.ok({
      message: 'Aplicacion de tratamiento eliminada correctamente',
    })
  }
}