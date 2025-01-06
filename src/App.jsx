import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointment from './pages/Myappointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navvbar'
import Footer from './components/footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] '>
<Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/myprofile' element={<Myprofile />}/>
        <Route path='/myappointment' element={<Myappointment />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App