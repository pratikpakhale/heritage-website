const router = require('express').Router()

const cityController = require('../controllers/city')

router.get('/', cityController.getCities)
router.get('/name/:name', cityController.getCityByName)
router.get('/state/:state', cityController.getCityByState)
router.get('/pincode/:pincode', cityController.getCityByPincode)
router.get('/:id', cityController.getCityById)

router.post('/', cityController.addCity)
router.put('/:id', cityController.updateCity)

module.exports = router
