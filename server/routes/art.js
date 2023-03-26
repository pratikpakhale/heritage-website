const router = require('express').Router()

const artController = require('../controllers/art')

router.get('/search', artController.searchArt)
router.get('/city/:city', artController.getArtsByCity)
router.get('/:id', artController.getArtById)
router.get('/', artController.getArts)
router.post('/', artController.addArt)
router.put('/:id', artController.updateArt)
router.delete('/:id', artController.deleteArt)

module.exports = router
