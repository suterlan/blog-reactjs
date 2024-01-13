import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('moli');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
      console.log('new post added');
      navigate('/');
    })
  }

  return (
    <div className="relative h-full px-3 mx-auto pt-6 max-w-7xl">
      <div className='mb-3'>Create New Post</div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='flex'>Post title</label>
          <input
            className='w-full mt-1 border border-slate-300 rounded p-1 px-3 text-slate-600 outline-slate-400'
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='flex'>Post body :</label>
          <textarea
            className='w-full mt-1 border border-slate-300 rounded p-1 px-3 text-slate-600 outline-slate-400'
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label className='flex'>Author :</label>
          <select
            className='w-full mt-1 border border-slate-300 rounded p-1 px-3 text-slate-600 outline-slate-400'
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="moli">Moli</option>
            <option value="mochi">Mochi</option>
          </select>
        </div>
        <div>
          <button
            className='py-1.5 px-4 text-white bg-blue-600 rounded-md'
            type='submit'
          >Save</button>
        </div>
      </form>
    </div>
  )
}
