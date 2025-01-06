import React from 'react';
import { assets } from '../assets/assets.js';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      {/*------Content Section-----------*/}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm'>
        {/* Left */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className='text-xl font-meduim mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-579-320-2029</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*------Bottom Section-----------*/}
      <div className='flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-gray-600 mt-6'>
        <hr className='w-full sm:w-auto sm:grow border-t border-gray-300 mb-4 sm:mb-0' />
        <p className='py-5 text-sm text-center '>
          Copyright 2025 © Prescripto - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;