const MBTI = require('../controllers/test-controller')
const testRouter = require('express').Router()

testRouter.get('/', MBTI.chooseTestType)
testRouter.get('/first-test', MBTI.firstTestPage)
testRouter.post('/first-test', MBTI.firstTestResult)
testRouter.get('/retest', MBTI.retestPage)
testRouter.post('/retest', MBTI.retestResult)

module.exports = testRouter