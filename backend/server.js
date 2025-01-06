const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./services/user/routes/userRoutes');
const blogRoutes = require('./services/blog/routes/blogRoutes');
const commentRoutes = require('./services/comment/routes/commentRoutes');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
