const express = require('express')
const bodyParser = require('body-parser')
const mounthRoutes = require('./routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mounthRoutes(app)


module.exports = app