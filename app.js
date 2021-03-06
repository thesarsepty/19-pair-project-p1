const express = require('express')
const app = express()
const PORT = process.env.PORT
const router = require('./routes/index.js')
const session = require('express-session')

app.set('view engine', 'ejs')

app.use(session({
  secret: 'coba dulu aja',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static('public')) //kalo mau pake css eksternal ke folder public
app.use(express.urlencoded({
  extended: false
}))

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
})