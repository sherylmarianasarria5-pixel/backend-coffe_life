import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'
import nodemailer from 'nodemailer'
import crypto from 'node:crypto'
import { DateTime } from 'luxon'

export default class PasswordResetController {
  async forgotPassword({ request, response }: HttpContext) {
    const { correo } = request.only(['correo'])

    const usuario = await Usuario.query().where('correo', correo).first()

    if (!usuario) {
      return response.notFound({ message: 'No existe un usuario con ese correo' })
    }

    const token = crypto.randomBytes(32).toString('hex')
    const expiry = DateTime.now().plus({ hours: 1 })

    usuario.merge({ resetToken: token, resetTokenExpiry: expiry })
    await usuario.save()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: correo,
      subject: 'Recuperación de contraseña - Coffee Life',
      html: `
        <h2>Recuperación de contraseña</h2>
        <p>Hola ${usuario.nombre},</p>
        <p>Tu token de recuperación es:</p>
        <h3>${token}</h3>
        <p>Este token expira en 1 hora.</p>
      `,
    })

    return response.ok({ message: 'Correo de recuperación enviado correctamente' })
  }

  async resetPassword({ request, response }: HttpContext) {
    const { token, nuevaContrasena } = request.only(['token', 'nuevaContrasena'])

    const usuario = await Usuario.query()
      .where('reset_token', token)
      .where('reset_token_expiry', '>', new Date())
      .first()

    if (!usuario) {
      return response.badRequest({ message: 'Token inválido o expirado' })
    }

    usuario.merge({ passwordHash: nuevaContrasena, resetToken: null, resetTokenExpiry: null })
    await usuario.save()

    return response.ok({ message: 'Contraseña actualizada correctamente' })
  }
}