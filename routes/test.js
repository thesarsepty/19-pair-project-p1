const MBTI = require('../controllers/test-controller')
const testRouter = require('express').Router()

testRouter.get('/', MBTI.testPage)
testRouter.post('/', MBTI.testResult)

module.exports = testRouter