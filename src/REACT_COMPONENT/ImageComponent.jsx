import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../REDUXSLICES/store'

function ImageComponent() {  
const image = useSelector((store)=>store.apivalues.image)

  return (
    <div className='absolute top-[25%] left-[35%] h-[100px] '>
      <img src={image} alt="" className='h-[120%]'/>
    </div>
  )
}

export default ImageComponent