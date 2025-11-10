
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import MensContact from './Pages/MensContact'
import WomenContact from './Pages/WomenContact'
import AboutDetail from './Pages/AboutDetail'
import Nav2 from './Pages/Nav2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* dynamic route  */}
        <Route path='/about/:id' element={<AboutDetail/>}/> 
        <Route path='/contact' element={<Contact />} > 
        <Route path='mensContact' element={<MensContact />} />
        <Route path='womensContact' element={<WomenContact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
