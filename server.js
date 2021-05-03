const express = require('express')
const app = express()
require('dotenv').config()
let PORT=process.env.PORT
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT)