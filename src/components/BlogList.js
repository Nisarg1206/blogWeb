import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <a href={`/blog/${blog._id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
