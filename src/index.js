require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

// Settings

app.set('port', process.env.PORT)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// ROUTES
app.use(require('./routes/index'))
// Static files
app.use(express.static(path.join(__dirname, 'public')))
// Listening server

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
