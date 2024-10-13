import React from 'react'
import { useSelector } from 'react-redux'
import store from '../REDUXSLICES/store'

function QualityCOmponent() {
const humidity = useSelector((store)=>store.apivalues.humidity);
const uvIndex = useSelector((store)=>store.apivalues.uvIndex);

  return (
    <>
        <div className=' font-mono absolute bottom-[30%] left-[50%] font-medium text-white/70 bg-white/15 rounded-full w-[170px] h-[65px] p-5 text-center '>HUMIDITY   {humidity}</div>
        <div className='absolute bottom-[15%] left-[50%] font-medium font-mono text-white/70 bg-white/15 rounded-full w-[170px] h-[65px] p-5 text-center '>UV INDEX {uvIndex}</div>
    </>
  )
}

export default QualityCOmponent