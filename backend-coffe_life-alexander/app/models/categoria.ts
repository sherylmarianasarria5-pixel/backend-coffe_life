import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Categoria extends BaseModel {
  static table = 'categorias'

  @column({ isPrimary: true })
  declare idCategoria: number

  @column()
  declare nombreCategoria: string

  @column()
  declare descripcion: string | null
}