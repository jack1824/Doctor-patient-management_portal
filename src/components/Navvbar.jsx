import React, { useState } from 'react'; // Added missing `useState` import
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // Fixed state initialization
  const [token, setToken] = useState(true); // Fixed state initialization

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate('/')} // Added click functionality for logo
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-10 font-medium">
        <NavLink to="/" className="hover:text-blue-600">
          <li className="relative py-1">
            Home
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></div>
          </li>
        </NavLink>
        <NavLink to="/doctors" className="hover:text-blue-600">
          <li className="relative py-1">
            All Doctors
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></div>
          </li>
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-600">
          <li className="relative py-1">
            About
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></div>
          </li>
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-600">
          <li className="relative py-1">
            Contact
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></div>
          </li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
        token 
        ?<div className='flex items-center gap-2 cursor-pointer group relative'>
          <img className='w-10 rounded-full'     src={assets.profile_pic} alt=" " />
          <img className='w-2.5'          src={assets.dropdown_icon} alt=""/>
          <div className='absolute top-0 right-0 pt-14 text-base font font-medium text-gray-600 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <p onClick={()=>navigate('/myprofile')} className='hover:text-primary cursor-pointer'>Profile</p>
              <p onClick={()=>navigate('/myappointment')} className='hover:text-primary cursor-pointer'>My Appointment</p>
              <p onClick={()=>setToken(false)} className='hover:text-primary cursor-pointer'>Logout</p>
            </div>
          </div>
        </div> 
        :<button onClick={() => navigate('/login')} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" >  Create Account</button>

      
      }
      
      </div>
    </div>
  )
}

export default Navbar;