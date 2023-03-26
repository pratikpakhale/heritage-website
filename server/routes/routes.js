const Router = require('express').Router()

const cityRoutes = require('./city')
const artRoutes = require('./art')

Router.use('/cities', cityRoutes)
Router.use('/arts', artRoutes)

module.exports = Router
