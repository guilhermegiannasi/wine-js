/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', '#controllers/wines_controller.index')
    router.post('/', '#controllers/wines_controller.store')
    router.get('/:id', '#controllers/wines_controller.show')
    router.put('/:id', '#controllers/wines_controller.update')
    router.delete('/:id', '#controllers/wines_controller.destroy')
  })
  .prefix('/wines')
