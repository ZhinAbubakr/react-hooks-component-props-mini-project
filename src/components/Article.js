import React from 'react';
import blogData from '../data/blog';

console.log(blogData.name)

const Article = ({ title, date = "January 1, 1970", preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
