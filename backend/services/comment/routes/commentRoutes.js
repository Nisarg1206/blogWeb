const express = require('express');
const { addComment, getComments } = require('../commentService');
const router = express.Router();

router.post('/', addComment);
router.get('/', getComments);

module.exports = router;
