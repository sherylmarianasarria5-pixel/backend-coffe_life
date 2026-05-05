import type { HttpContext } from '@adonisjs/core/http'
import Recomendacione from '#models/recomendacione'

export default class RecomendacionesController {

  async index({ response }: HttpContext) {
    try {
      const recomendaciones = await Recomendacione.query()
        .preload('monitoreo')
        .preload('experto')
        .preload('tipo')
        .preload('tratamientos')
      return response.ok(recomendaciones)
    } catch (error: any) {
      return response.internalServerError({
        message: 'Error al obtener recomendaciones',
        error: error.message,
      })
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const data = request.only([
        'id_monitoreo',
        'id_tipo',
        'id_experto_emisor',
        'descripcion',
        'fecha_limite',
        'id_prioridad',
      ])

      if (!data.id_monitoreo) {
        return response.badRequest({ message: 'El id_monitoreo es obligatorio' })
      }

      if (!data.id_experto_emisor) {
        return response.badRequest({ message: 'El id_experto_emisor es obligatorio' })
      }

      const recomendacion = await Recomendacione.create({
        idMonitoreo:     data.id_monitoreo,
        idTipo:          data.id_tipo,
        idExpertoEmisor: data.id_experto_emisor,
        descripcion:     data.descripcion,
        fechaLimite:     data.fecha_limite,
        idPrioridad:     data.id_prioridad,
      })

      return response.created({
        message: 'Recomendación creada correctamente',
        data: recomendacion,
      })
    } catch (error: any) {
      return response.internalServerError({
        message: 'Error al crear recomendación',
        error: error.message,
      })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const recomendacion = await Recomendacione.query()
        .where('id_recomendacion', params.id)
        .preload('monitoreo')
        .preload('experto')
        .preload('tipo')
        .preload('tratamientos')
        .firstOrFail()
      return response.ok(recomendacion)
    } catch {
      return response.notFound({ message: 'Recomendación no encontrada' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const recomendacion = await Recomendacione.findOrFail(params.id)
      const data = request.only([
        'id_tipo',
        'descripcion',
        'fecha_limite',
        'id_prioridad',
      ])

      const payload: Record<string, any> = {}
      if (data.id_tipo      !== undefined) payload.idTipo      = data.id_tipo
      if (data.descripcion  !== undefined) payload.descripcion = data.descripcion
      if (data.fecha_limite !== undefined) payload.fechaLimite = data.fecha_limite
      if (data.id_prioridad !== undefined) payload.idPrioridad = data.id_prioridad

      recomendacion.merge(payload)
      await recomendacion.save()

      return response.ok({
        message: 'Recomendación actualizada correctamente',
        data: recomendacion,
      })
    } catch (error: any) {
      return response.internalServerError({
        message: 'Error al actualizar recomendación',
        error: error.message,
      })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const recomendacion = await Recomendacione.findOrFail(params.id)
      await recomendacion.delete()
      return response.ok({ message: 'Recomendación eliminada correctamente' })
    } catch (error: any) {
      return response.internalServerError({
        message: 'Error al eliminar recomendación',
        error: error.message,
      })
    }
  }
}