const express = require('express');
const { registerUser, loginUser, getUser, updateUser, deleteUser } = require('../userService');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
