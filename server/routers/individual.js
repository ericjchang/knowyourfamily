const router = require('express').Router();
const IndividualController = require('../controllers/individualController.js');
const { authentication } = require('../middlewares/auth');

router.use(authentication);

router.get('/', IndividualController.findAll);
router.post('/', IndividualController.createIndividual);
router.get('/:id', IndividualController.findByPk);
router.put('/:id', IndividualController.updateIndividual);
router.delete('/:id', IndividualController.deleteIndividual);

module.exports = router;
