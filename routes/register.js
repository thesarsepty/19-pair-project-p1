const Register = require('../controllers/register-controller')
const registerRouter = require('express').Router()

registerRouter.get('/', Register.registerPage)
registerRouter.post('/', Register.registerData)

module.exports = registerRouter