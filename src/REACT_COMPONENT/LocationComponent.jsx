import React from 'react'
import { useSelector } from 'react-redux'
import store from '../REDUXSLICES/store'

function LocationComponent() {
  const location = useSelector((store)=>store.apivalues.location);
  return (
    <div className='font-mono absolute bottom-4 right-[40%] text-sm text-white/65 '>
        {location}
    </div>
  )
}

export default LocationComponent