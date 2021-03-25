const componentRouter = require('express').Router()
const ComponentController = require('../controllers/component-controller.js')

componentRouter.get('/add', ComponentController.addPage)
componentRouter.post('/add', ComponentController.add)
componentRouter.get('/delete/', ComponentController.deletePage)
componentRouter.get('/delete/:id', ComponentController.delete)

module.exports = componentRouter