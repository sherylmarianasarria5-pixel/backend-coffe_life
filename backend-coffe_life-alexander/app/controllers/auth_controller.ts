import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {

  async login({ request, response }: HttpContext) {
    try {
      const data = request.only(['correo', 'password'])

      if (!data.correo)   return response.badRequest({ message: 'El correo es obligatorio' })
      if (!data.password) return response.badRequest({ message: 'La contraseña es obligatoria' })

      const usuario = await Usuario.query()
        .where('correo', data.correo)
        .where('activo', true)
        .preload('rol')
        .first()

      if (!usuario) {
        return response.unauthorized({ message: 'Credenciales incorrectas' })
      }

      const passwordValido = await hash.verify(usuario.passwordHash, data.password)

      if (!passwordValido) {
        return response.unauthorized({ message: 'Credenciales incorrectas' })
      }

      return response.ok({
        message: 'Login exitoso',
        data: {
          idUsuario: usuario.idUsuario,
          nombre:    usuario.nombre,
          apellido:  usuario.apellido,
          correo:    usuario.correo,
          rol:       usuario.rol,
        },
      })
    } catch (error: any) {
      return response.internalServerError({
        message: 'Error al iniciar sesión',
        error: error.message,
      })
    }
  }
}