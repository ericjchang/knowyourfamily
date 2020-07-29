const router = require('express').Router();
const RelationshipController = require('../controllers/relationshipController.js');
const { authentication } = require('../middlewares/auth');

router.use(authentication);

router.get('/', RelationshipController.findAll);
router.get('/requested', RelationshipController.requested);
router.post('/', RelationshipController.createRelationship);
router.put('/:id', RelationshipController.updateRelationship);
router.delete('/:id', RelationshipController.deleteRelationship);

module.exports = router;
