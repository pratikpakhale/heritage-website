const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const routes = require('./routes/routes')

const globalRoutesHandler = require('./middlewares/error').globalRoutesHandler

app.use('/api', routes)

app.use('/', globalRoutesHandler)

module.exports = app
app.listen(5000, () => {
  console.log(`Server started on port 5000`)
  const dbURI = 'mongodb://0.0.0.0:27017/city'
  mongoose.set('strictQuery', true)
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
    })
})
