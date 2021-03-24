const logoutRouter = require('express').Router()
const Logout = require('../controllers/logout-controller.js')

logoutRouter.get('/', Logout.logout)

module.exports = logoutRouter