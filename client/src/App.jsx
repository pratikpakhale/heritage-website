import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddArt from './pages/AddArt'
import AddCity from './pages/AddCity'
import Docs from './pages/Docs'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-art' element={<AddArt />} />
        <Route path='/add-city' element={<AddCity />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
    </>
  )
}

export default App
