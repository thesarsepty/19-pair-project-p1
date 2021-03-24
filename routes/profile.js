const ProfileController = require('../controllers/profile-controller')
const profileRouter = require('express').Router()

profileRouter.get('/', ProfileController.profilePage)

module.exports = profileRouter