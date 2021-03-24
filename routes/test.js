const MBTI = require('../controllers/test-controller')
const testRouter = require('express').Router()

testRouter.get('/', MBTI.testPage)

module.exports = testRouter