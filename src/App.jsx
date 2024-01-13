/* eslint-disable no-unused-vars */
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import PostDetails from './components/PostDetails'
import Create from './pages/Create'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
