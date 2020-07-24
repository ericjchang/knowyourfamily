const router = require('express').Router();
const IndividualController = require('../controllers/individualController.js');

router.get('/', IndividualController.findAll);
router.post('/', IndividualController.createIndividual);
router.get('/?search=', IndividualController.findOne);
router.put('/:id', IndividualController.updateIndividual);
router.delete('/:id', IndividualController.deleteIndividual);

module.exports = router;