const Art = require('../models/art')
const City = require('../models/city')

exports.searchArt = async (req, res) => {
  const searchText = req.query.query

  try {
    const art = await Art.find({
      $or: [
        { name: { $regex: searchText, $options: 'i' } },
        { description: { $regex: searchText, $options: 'i' } },
        {
          city: {
            $in: await City.find({
              name: { $regex: searchText, $options: 'i' },
            }),
          },
        },
      ],
    }).populate('city')

    res.status(200).json(art)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getArts = async (req, res) => {
  try {
    const art = await Art.find().populate('city')
    res.status(200).json(art)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getArtById = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id).populate('city')
    res.status(200).json(art)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getArtsByCity = async (req, res) => {
  try {
    const city = await City.findOne({ name: req.params.city })

    if (city.length === 0) {
      res.status(404).json({ message: 'City not found' })
    }

    const art = await Art.find({ city: city._id }).populate('city')
    res.status(200).json(art)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.addArt = async (req, res) => {
  try {
    const city = await City.findOne({ name: req.body.city })

    if (!city) {
      return res.status(404).json({ message: 'City not found' })
    }

    const art = new Art({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      artist: req.body.artist,
      city: city._id,
    })

    const savedArt = await art.save()
    res.status(201).json(savedArt)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.updateArt = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id)
    if (art) {
      const city = await City.findOne({ name: req.body.city })

      if (!city) {
        res.status(404).json({ message: 'City not found' })
      }

      art.name = req.body.name
      art.image = req.body.image
      art.description = req.body.description
      art.artist = req.body.artist
      art.city = city._id

      await art.save()
      res.status(200).json(updatedArt)
    } else {
      res.status(404).json({ message: 'Art not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.deleteArt = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id)
    if (art) {
      await art.remove()
      res.status(200).json({ message: 'Art deleted' })
    } else {
      res.status(404).json({ message: 'Art not found' })
    }
  } catch (err) {
    res.status(500).json({ message: err })
  }
}
