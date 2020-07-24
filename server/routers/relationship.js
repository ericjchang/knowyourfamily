const router = require('express').Router();
const RelationshipController = require('../controllers/relationshipController.js');

router.get('/', RelationshipController.findAll);
router.post('/', RelationshipController.createRelationship);
router.put('/:id', RelationshipController.updateRelationship);
router.delete('/:id', RelationshipController.deleteRelationship);

module.exports = router;