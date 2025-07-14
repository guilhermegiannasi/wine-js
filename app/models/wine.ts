import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Wine extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public name!: string

  @column()
  public tipo?: string

  @column()
  public pais?: string

  @column()
  public ano?: number

  @column()
  public descricao?: string

  @column()
  public favorito?: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
