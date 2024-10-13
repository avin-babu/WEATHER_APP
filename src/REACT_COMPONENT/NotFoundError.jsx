import React from 'react'
import { useSelector } from 'react-redux'
import store from '../REDUXSLICES/store'

function NotFoundError() {
const error = useSelector((store)=>store.apivalues.error);

  return (
    <div className='absolute top-[40%] left-[5px] text-white/50 text-4xl w-[150%] p-2'>{error}</div>
  )
}

export default NotFoundError