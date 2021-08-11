require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT)

// ROUTES

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
// Static files

// Listening server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
