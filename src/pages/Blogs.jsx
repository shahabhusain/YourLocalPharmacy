import React from 'react'
import Title from '../components/Title'
import Blog from '../components/blog/Blog'
import BlogJoin from '../components/blog/BlogJoin'
import { ScrollRestoration } from 'react-router-dom'

const Blogs = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Blogs" desc="Easily handle your repeat prescriptions" />
        <Blog />
        <BlogJoin />
    </div>
  )
}

export default Blogs