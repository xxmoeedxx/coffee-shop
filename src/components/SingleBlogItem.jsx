import React from 'react';

const SingleBlogItem = ({ blog }) => {
  return (
    <div className="col-lg-6 col-md-6 single-blog">
      <img className="img-fluid" src={blog.img} alt="Blog Post" />
      <ul className="post-tags">
        {blog.tags.map((tag, index) => <li key={index}><a href="#">{tag}</a></li>)}
      </ul>
      <a href="#"><h4>{blog.title}</h4></a>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <p className="post-date">{blog.date}</p>
    </div>
  );
};

export default SingleBlogItem;
