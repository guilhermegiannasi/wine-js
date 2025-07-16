import { BaseSchema } from '@adonisjs/lucid/schema'

export default class RenameColumnInWines extends BaseSchema {
  protected tableName = 'wines'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('name', 'nome')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('nome', 'name')
    })
  }
}
