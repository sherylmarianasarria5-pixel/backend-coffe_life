import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'

export default class AdminController {
  async index({ response }: HttpContext) {
    const usuarios = await Usuario.query()
      .whereHas('rol', (query) => {
        query.whereRaw('LOWER ( TRIM  (nombre_rol)) = ?', ['admin'])
      })
      .preload('rol')

    return response.ok(usuarios)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'nombre',
      'apellido',
      'correo',
      'telefono',
      'passwordHash',
      'observaciones',
      'activo',
    ])

    const { default: CatRol } = await import('#models/cat_rol')

    const rolAdmin = await CatRol.query()
      .whereRaw('LOWER(TRIM(nombre_rol)) = ?', ['admin'])
      .firstOrFail()

    const usuario = await Usuario.create({
      ...data,
      idRol: rolAdmin.idRol,
    })

    return response.created({
      message: 'Administrador creado correctamente',
      data: usuario,
    })
  }
  async show({ params, response }: HttpContext) {
    const usuario = await Usuario.query()
      .where('id_usuario', params.id)
      .whereHas('rol', (query) => {
        query.whereRaw('LOWER(TRIM(nombre_rol)) = ?', ['admin'])
      })
      .preload('rol')
      .firstOrFail()

    return response.ok(usuario)
  }
  async update({ params, request, response }: HttpContext) {
    const usuario = await Usuario.query().where('id_usuario', params.id).firstOrFail()

    usuario.merge(
      request.only([
        'nombre',
        'apellido',
        'correo',
        'telefono',
        'passwordHash',
        'observaciones',
        'activo',
      ])
    )

    await usuario.save()

    return response.ok({
      message: 'Administrador actualizado',
      data: usuario,
    })
  }
  async destroy({ params, response }: HttpContext) {
    const usuario = await Usuario.query().where('id_usuario', params.id).firstOrFail()

    await usuario.delete()

    return response.ok({
      message: 'Administrador eliminado',
    })
  }
}
