import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h2>Latest Blog Posts</h2>
      <div className="blog-post">
        <h3>Blog Post Title</h3>
        <p>Posted by John Doe on January 1, 2024</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
      </div>
      <div className="blog-post">
        <h3>Another Blog Post Title</h3>
        <p>Posted by Jane Smith on January 2, 2024</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
      </div>
      {/* Add more blog posts as needed */}
    </div>
  );
}

export default Blog;
