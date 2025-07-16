import type { HttpContext } from '@adonisjs/core/http'
import Wine from '#models/wine'

export default class WinesController {
  async index({}: HttpContext) {
    return await Wine.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'tipo', 'pais', 'ano', 'descricao', 'favorito'])
    const wine = await Wine.create(data)
    return wine
  }

  async show({ params }: HttpContext) {
    return await Wine.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const wine = await Wine.findOrFail(params.id)
    const data = request.only(['nome', 'tipo', 'pais', 'ano', 'descricao', 'favorito'])
    wine.merge(data)
    await wine.save()
    return wine
  }

  async destroy({ params }: HttpContext) {
    const wine = await Wine.findOrFail(params.id)
    await wine.delete()
    return { message: 'Vinho removido com sucesso' }
  }
}
