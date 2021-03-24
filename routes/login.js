const Login = require('../controllers/login-controller')
const loginRouter = require('express').Router()

loginRouter.get('/', Login.loginPage)
loginRouter.post('/', Login.loginCheck)

module.exports = loginRouter