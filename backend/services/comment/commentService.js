const Comment = require('./models/Comment');

const addComment = async (req, res) => {
  const { content, postId } = req.body;
  try {
    const comment = new Comment({ content, postId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error adding comment' });
  }
};

const getComments = async (req, res) => {
  const { postId } = req.query;
  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

module.exports = { addComment, getComments };
