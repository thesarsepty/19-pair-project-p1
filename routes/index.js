const loginRouter = require('./login')
const personalityRouter = require('./personalities')
const registerRouter = require('./register')
const isLoginMiddleware = require('../middlewares/loginMiddleware.js')
const logoutRouter = require('./logout')
const testRouter = require('./test')
const profileRouter = require('./profile')
const componentRouter = require('./delete-add-component')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('home-page')
})

router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/logout', logoutRouter)
router.use('/profile', isLoginMiddleware, profileRouter)
router.use('/personalities', personalityRouter)
router.use('/test-mbti', isLoginMiddleware, testRouter)
router.use('/component', isLoginMiddleware, componentRouter)

module.exports = router