/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function PostList({ posts, title }) {
  // const posts = props.posts;
  // const title = props.title;
  return (
    <>
      <h1 className="text-3xl font-bold uppercase mb-4">
        {title}
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2'>
        {posts.map((post) => (
          <span key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div className='h-52 bg-slate-100/60 p-6 mx-4 mb-4 rounded-md shadow-lg hover:-translate-y-1 duration-200'>
                <h2 className='text-lg font-semibold text-blue-800'>{post.title}</h2>
                <p className='text-slate-400 text-sm'>By : {post.author}</p>
              </div>
            </Link>
          </span>
        ))}
      </div >
    </>
  )
}
