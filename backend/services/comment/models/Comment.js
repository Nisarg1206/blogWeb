const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
