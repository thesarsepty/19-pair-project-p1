const loginRouter = require('./login')
const personalityRouter = require('./personalities')
const registerRouter = require('./register')

const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello') // <<<<<<<<<<< ini halaman home
})

router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/personalties', personalityRouter)

module.exports = router