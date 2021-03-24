const ProfileController = require('../controllers/profile-controller')
const profileRouter = require('express').Router()

profileRouter.get('/', ProfileController)

module.exports = profileRouter