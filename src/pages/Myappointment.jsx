import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Myappointment = () => {
  const { doctors } = useContext(AppContext) // Correct placement of useContext

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-900 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="grid grid-cols-[1fr_3fr_1fr] gap-4 p-4 border-b sm:flex sm:gap-6 py-2 border-b">
            <div>
              <img className="w-40 bg-indigo-50" src={item.image} alt={`${item.name}'s profile`} />
            </div>
            <div className='flex-1 text-sm text-zinc-600 justify-center'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-neutral-800 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-800 font-medium'>Date & Time:</span> 25th April | 2:30 PM
              </p>
            </div>
            <div className='flex flex-col items-center justify-end'>
              <button className='text-sm mt-4 text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all diuration-300'>Pay Online</button>
              <button className='text-sm mt-4 text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all diuration-300'>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointment