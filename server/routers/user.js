const router = require('express').Router();
const UserController = require('../controllers/userController.js');

router.get('/:id', UserController.findUserById);
router.put('/:id', UserController.updateUser);

module.exports = router;