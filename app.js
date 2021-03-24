const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index.js')

app.use(express.static('public')) //kalo mau pake css eksternal ke folder public

app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended: false
}))

app.use('/', router)

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})