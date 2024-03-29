const router = require('express').Router();
const UserController = require('../controllers/userController.js');
const IndividualRouter = require('./individual.js');
const RelationshipRouter = require('./relationship.js');
const SuggestionpRouter = require('./suggestion.js');

router.get('/', (req, res, next) => {
  res.status(200).json({
    msg: 'Welcome to FamTree',
  });
});
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.use('/individual', IndividualRouter);
router.use('/family', RelationshipRouter);
router.use('/suggestion', SuggestionpRouter);

module.exports = router;
