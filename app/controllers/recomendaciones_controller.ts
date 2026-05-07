import type { HttpContext } from '@adonisjs/core/http'
import Recomendacione from '#models/recomendacione'

export default class RecomendacionesController {
  async index({ response }: HttpContext) {
    const recomendaciones = await Recomendacione.query()
      .preload('monitoreo')
      .preload('tipo')
      .preload('experto')
    return response.ok({
      message: 'Lista de recomendaciones',
      data: recomendaciones,
    })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'idMonitoreo',
      'idTipo',
      'idExpertoEmisor',
      'descripcion',
      'fechaLimite',
      'idPrioridad',
    ])
    const recomendacion = await Recomendacione.create(data)
    return response.created({
      message: 'Recomendacion creada correctamente',
      data: recomendacion,
    })
  }

  async show({ params, response }: HttpContext) {
    const recomendacion = await Recomendacione.query()
      .where('id_recomendacion', params.id)
      .preload('monitoreo')
      .preload('tipo')
      .preload('experto')
      .firstOrFail()
    return response.ok({
      message: 'Recomendacion encontrada',
      data: recomendacion,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const recomendacion = await Recomendacione.findOrFail(params.id)
    const data = request.only([
      'idMonitoreo',
      'idTipo',
      'idExpertoEmisor',
      'descripcion',
      'fechaLimite',
      'idPrioridad',
    ])
    recomendacion.merge(data)
    await recomendacion.save()
    return response.ok({
      message: 'Recomendacion actualizada correctamente',
      data: recomendacion,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const recomendacion = await Recomendacione.findOrFail(params.id)
    await recomendacion.delete()
    return response.ok({
      message: 'Recomendacion eliminada correctamente',
    })
  }
}