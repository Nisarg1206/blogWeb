const express = require('express');
const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

router.post('/blogs', createBlog);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlog);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

module.exports = router;
