import React from 'react';
import blogData from '../data/blog';
import About from './About';

console.log(blogData.name)

const Header = () => {
  return (
    <header>
      <h1>{blogData.name}</h1>
      <About  image={blogData.image} about={blogData.about}/>
    </header>
  );
};

export default Header;
