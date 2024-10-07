import React from 'react';
import SingleBlogItem from './SingleBlogItem';

const BlogSection = () => {
  const blogs = [
    { img: 'img/b1.jpg', title: 'Portable latest Fashion for young women', tags: ['Travel', 'Life Style'], date: '31st January, 2018' },
    { img: 'img/b2.jpg', title: 'Portable latest Fashion for young women', tags: ['Travel', 'Life Style'], date: '31st January, 2018' }
  ];

  return (
    <section className="blog-area section-gap" id="blog">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <SingleBlogItem key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
