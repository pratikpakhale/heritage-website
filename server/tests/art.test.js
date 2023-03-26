const app = require('../app')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const Art = require('../models/art')
const City = require('../models/city')

const { expect } = chai

chai.use(chaiHttp)

describe('Art controller tests', function () {
  this.timeout(10000) // set timeout for all tests in this describe block

  before(async function () {
    await mongoose.disconnect()
    await mongoose.connect('mongodb://0.0.0.0:27017/testcity', {
      useNewUrlParser: true,
    })

    console.log('Connected to MongoDB')

    // Insert dummy data before each test

    const cities = [
      { name: 'New York', state: 'New York', pincode: '10001' },
      { name: 'London', state: 'England', pincode: '10002' },
      { name: 'Paris', state: 'France', pincode: '10003' },
    ]

    const citiesArr = await City.insertMany(cities)

    const arts = [
      {
        name: 'Art 1',
        description: 'Description 1',
        city: citiesArr[0]._id,
        artist: 'Artist 1',
      },
      {
        name: 'Art 2',
        description: 'Description 2',
        city: citiesArr[1]._id,
        artist: 'Artist 2',
      },
      {
        name: 'Art 3',
        description: 'Description 3',
        city: citiesArr[2]._id,
        artist: 'Artist 3',
      },
    ]
    await Art.insertMany(arts)
  })

  after(async () => {
    // Remove all dummy data after each test
    await Art.deleteMany()
    await City.deleteMany()
    await mongoose.disconnect()
  })

  describe('GET /api/arts', () => {
    it('should return all arts', async () => {
      const res = await chai.request(app).get('/api/arts')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(3)
    })

    it('should return arts filtered by city', async () => {
      const res = await chai.request(app).get('/api/arts/city/New%20York')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(1)
      expect(res.body[0].name).to.equal('Art 1')
    })
  })

  describe('GET /api/arts/:id', () => {
    it('should return an art by id', async () => {
      const art = await Art.findOne({ name: 'Art 1' })
      const res = await chai.request(app).get(`/api/arts/${art._id}`)
      expect(res.status).to.equal(200)
      expect(res.body.name).to.equal('Art 1')
    })
  })

  describe('GET /api/arts/search', () => {
    it('should return arts filtered by search query', async () => {
      const res = await chai.request(app).get('/api/arts/search?query=Art')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(3)
    })
  })

  describe('POST /api/arts', () => {
    it('should add an art', async () => {
      const res = await chai.request(app).post('/api/arts').send({
        name: 'Art 4',
        description: 'Description 4',
        city: 'New York',
        artist: 'Artist 4',
      })
      expect(res.status).to.equal(201)
      expect(res.body.name).to.equal('Art 4')
    })
  })
})
