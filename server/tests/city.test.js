const app = require('../app')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const Art = require('../models/art')
const City = require('../models/city')

const { expect } = chai

chai.use(chaiHttp)

describe('City controller tests', function () {
  this.timeout(10000)

  before(async function () {
    await mongoose.disconnect()
    await mongoose.connect('mongodb://0.0.0.0:27017/testcity', {
      useNewUrlParser: true,
    })

    console.log('Connected to MongoDB')

    // Insert dummy data before each test

    const cities = [
      { name: 'Mumbai', state: 'Maharashtra', pincode: '10001' },
      { name: 'Bangalore', state: 'Karnataka', pincode: '10002' },
      { name: 'Pune', state: 'Maharashtra', pincode: '10003' },
    ]

    const citiesArr = await City.insertMany(cities)
  })

  after(async () => {
    await City.deleteMany()
    await mongoose.disconnect()
  })

  describe('GET Cities', () => {
    it('should return all cities', async () => {
      const res = await chai.request(app).get('/api/cities')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(3)
    })

    it('should return city information filtered by city', async () => {
      const res = await chai.request(app).get('/api/cities/name/Mumbai')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(1)
      expect(res.body[0].name).to.equal('Mumbai')
    })

    it('should return city information filtered by pincode', async () => {
      const res = await chai.request(app).get('/api/cities/pincode/10002')
      expect(res.status).to.equal(200)
      expect(res.body).to.have.lengthOf(1)
      expect(res.body[0].name).to.equal('Bangalore')
    })
  })
})
