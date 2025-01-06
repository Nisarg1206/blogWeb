const express = require('express');
const { register, login, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users/:id', getUser);

module.exports = router;
