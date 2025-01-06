const Comment = require('../models/commentModel');

exports.addComment = async (req, res) => {
  try {
    const { content, postId } = req.body;
    const comment = new Comment({ content, postId, author: req.user.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.query.post_id }).populate('author', 'username').exec();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
