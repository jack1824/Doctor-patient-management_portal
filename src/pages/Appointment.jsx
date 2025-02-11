import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = () => {
    if (doctors && doctors.length > 0) { // Ensure doctors array is loaded, copied
      const doc = doctors.find(doc => doc._id === docId)
      setDocInfo(doc)
      console.log(doc)
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return (
    <div>
      {/* Ensure docInfo is loaded before rendering */}
      {docInfo ? (     
        <div>
          
          {/* Doctor details */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <img src={docInfo.image} alt={docInfo.name} />
          </div>
          <div>
            {/*--------------Doc Info:details------------- */}
            <p>{docInfo.name}
              <img src={assets.verified_icon} alt='' /> </p>
              <div>
                <p>{docInfo.degree}-{docInfo.speciality}</p>
                <button>{docInfo.experience}</button>
              </div>
              {/*--------------About------------- */}
              <div>
                <p>{docInfo.about}</p>
              </div>
          </div>  
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Appointment