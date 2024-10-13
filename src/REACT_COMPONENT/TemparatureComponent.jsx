import React from 'react'
import { useSelector } from 'react-redux'
import store from '../REDUXSLICES/store'

function TemparatureComponent() {

    const condition = useSelector((store)=>store.apivalues.condition);
    const tempCelsius = useSelector((store)=>store.apivalues.tempCelsius);
    // console.log('tempCelsius: ', tempCelsius);
    
  return (
    <> 
        <div>

            <div className='absolute right-[52%] top-[60%] w-[155px] h-[155px] text-4xl  text-black bg-slate-50/90 rounded-full text-center  pr-2 pt-10 font-thin'>
                {tempCelsius} °c   
            </div>
            <div className='font-mono absolute right-[40%] top-[47%] text-white/65 '>
                {condition}
            </div>
            {/* <button className='text-white absolute top-[30%]'>°C</button>
            <button className='text-white'>°F</button> */}
        </div>
    </>
  )
}

export default TemparatureComponent