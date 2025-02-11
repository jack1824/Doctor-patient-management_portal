import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px:6 sm:px-6 md:px-10 lg:px-12 my-20 md:mx-10'>
        {/*-----------left-------------*/ }
        <div className='flex-1 py-8 sm:py-8 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                <p >Book Appointments</p>
                <p className='mt-4'>with 100+ trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white text-gray-600 px-12 py-3 mt-10 rounded-full hover:bg-blue-300 hover:text-gray-600 hover:scale-105 transition-all duration-300'> Book Now</button>
        </div>

        {/*-----------right-------------*/ }
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md ' src={assets.appointment_img}  alt='' />
        </div>
    </div>
  )
}

export default Banner