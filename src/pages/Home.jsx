// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import PostList from '../components/PostList';
import useFetch from '../services/useFetch';

export default function Home() {

  const { data: posts, isPending, error } = useFetch('http://localhost:8000/posts');

  return (
    <>
      <div className="relative h-full px-3 mx-auto pt-6 max-w-7xl">
        {error && <div className='font-normal'>{error}</div>}
        {isPending && <div className='font-medium'>Loading.....</div>}
        {posts && < PostList posts={posts} title="All Blogs" />}
        {/* <PostList posts={posts.filter((post) => post.author === 'Moli')} title="Moli Blogs" /> */}
      </div >
    </>
  )
}
