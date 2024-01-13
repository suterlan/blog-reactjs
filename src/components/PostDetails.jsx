// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../services/useFetch';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isPending, error } = useFetch('http://localhost:8000/posts/' + id);

  const handleDelete = () => {
    fetch('http://localhost:8000/posts/' + post.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  }
  return (
    <>
      <div className="relative h-full px-3 mx-auto pt-6 max-w-7xl">
        {error && <div className='font-normal'>{error}</div>}
        {isPending && <div className='font-medium'>Loading.....</div>}
        {post && (
          <article>
            <div className='font-bold text-2xl mb-1'>{post.title}</div>
            <p className='text-sm mb-4'>Written by <span className='text-blue-700 font-semibold'> {post.author}</span></p>
            <div className='text-slate-600'>{post.body}</div>
            <div>
              <button
                onClick={handleDelete}
                className='py-1.5 px-4 text-white bg-red-500 rounded-md'
                type='submit'
              >Delete</button>
            </div>
          </article>
        )}
      </div>
    </>
  )
}
