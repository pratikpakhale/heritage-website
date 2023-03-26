const mongoose = require('mongoose')

const artSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'City',
  },
})

const Art = mongoose.model('Art', artSchema)

module.exports = Art
