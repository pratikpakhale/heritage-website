const City = require('../models/city')

exports.getCities = async (req, res) => {
  try {
    const city = await City.find()
    res.status(200).json(city)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getCityByName = async (req, res) => {
  try {
    const city = await City.find({ name: req.params.name })
    res.status(200).json(city)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getCityByState = async (req, res) => {
  try {
    const city = await City.find({ state: req.params.state })
    res.status(200).json(city)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getCityByPincode = async (req, res) => {
  try {
    const city = await City.find({ pincode: req.params.pincode })
    res.status(200).json(city)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id)
    res.status(200).json(city)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.addCity = async (req, res) => {
  const city = new City({
    name: req.body.name,
    state: req.body.state,
    pincode: req.body.pincode,
  })
  try {
    const savedCity = await city.save()
    res.status(201).json(savedCity)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.updateCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id)
    if (req.body.name) {
      city.name = req.body.name
    }
    if (req.body.state) {
      city.state = req.body.state
    }
    if (req.body.pincode) {
      city.pincode = req.body.pincode
    }
    const updatedCity = await city.save()
    res.status(200).json(updatedCity)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}
