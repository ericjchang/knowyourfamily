const router = require('express').Router();
const RelationshipController = require('../controllers/suggestionController.js');
const { authentication } = require('../middlewares/auth');

router.use(authentication);

router.get('/', RelationshipController.findAll);

module.exports = router;
