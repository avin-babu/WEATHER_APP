import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageComponent from './ImageComponent';
import LocationComponent from './LocationComponent';
import TemparatureComponent from './TemparatureComponent';
import QualityCOmponent from './QualityCOmponent';
import { useDispatch, useSelector } from 'react-redux';
import store from '../REDUXSLICES/store';
import ValueSlice from '../REDUXSLICES/ValueSlice';
import fetchApi from '../REDUXSLICES/apiMiddlewareFunction';
import apiMiddlewareFunction from '../REDUXSLICES/apiMiddlewareFunction';
import ApiSlice from '../REDUXSLICES/ApiSilce';
import NotFoundError from './NotFoundError';


const actions = ValueSlice.actions;
const apiActions = ApiSlice.actions;

function MainComponent() {
  
  const value = useSelector((store)=>store.value.value);
  const tempCelsius = useSelector((store)=>store.apivalues.tempCelsius);
  const uvIndex = useSelector((store)=>store.apivalues.uvIndex);
  const humidity = useSelector((store)=>store.apivalues.humidity);
  const location = useSelector((store)=>store.apivalues.location);
  const image = useSelector((store)=>store.apivalues.image);
  const error = useSelector((store)=>store.apivalues.error);

  // console.log(error);
  const dispatch = useDispatch();
  
  const handleValue = (e)=>{
    dispatch(actions.addValue(e.target.value));
    dispatch(apiActions.clearError());
    dispatch(apiActions.clearValues());
  }

  const handleCross = ()=>{
    dispatch(actions.clearValue());
  }

  const handleApiFunction = (e)=>{
    if(e.key==='Enter'){
      dispatch(fetchApi(value));
    }
    // console.log('e:',e.key);
    
  }

  const removeApiValues = ()=>{
    dispatch(apiActions.clearValues());
  }

  return (
    <div className='bg-black  p-[20px] h-[600px] w-[370px] rounded-2xl absolute right-[40%]'>
          <input type="text" className=' font-mono p-2 w-[300px] h-[30px] m-3 absolute right-[0.9rem] top-1.05 bg-black border-b-2 border-white/25 text-white/60 focus:outline-none ' placeholder='Search with your place...' onChange={handleValue} value={value} onKeyDown={handleApiFunction}/>

          {!value ? <FontAwesomeIcon icon={faSearch} className='absolute right-10 top-10 cursor-pointer text-white/25' /> : <FontAwesomeIcon icon={faXmark}  className='absolute right-10 top-10 cursor-pointer text-white/25'onClick={handleCross}/>}
      <div>
        {value ? 
        <>
          { image!==null ? <ImageComponent />:<></>}
          { uvIndex!==null && humidity!==null ? <QualityCOmponent />:<></>}
          { tempCelsius!==null ? <TemparatureComponent />:<></>}
          { location!==null ? <LocationComponent /> :<></>}
          { error!== null ? <NotFoundError />:<></>}
        </>:
       <div>
        {removeApiValues()}
      </div>}
        
          
      </div>   
     
    </div>
  )
}

export default MainComponent