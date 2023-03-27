const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.json())

const routes = require('./routes/routes')

const globalRoutesHandler = require('./middlewares/error').globalRoutesHandler

app.use('/api', routes)

app.use('/', globalRoutesHandler)

module.exports = app
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
  mongoose.set('strictQuery', true)
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
    })
})
