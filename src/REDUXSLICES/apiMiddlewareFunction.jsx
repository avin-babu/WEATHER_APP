import ApiSlice from "./ApiSilce"

const actions = ApiSlice.actions;

const apiMiddlewareFunction =  (value)=>{
    return async (dispatch)=>{
        try{
            const tempApiOut = await fetch(`https://api.weatherapi.com/v1/current.json?key=9871b102c89d452299f23227241306&q=${value}`);
            const tempJson = await tempApiOut.json();
            // console.log('tempJson',tempJson);
            
            dispatch(actions.setCondition(tempJson.current.condition.text));

            dispatch(actions.setImage(tempJson.current.condition.icon));

            dispatch(actions.tempCelsiusFunction(tempJson.current.temp_c));

            dispatch(actions.setHumidity(tempJson.current.humidity));

            dispatch(actions.setUvIndex(tempJson.current.uv));

            dispatch(actions.setLocation(tempJson.location.name));

        }
        catch(e){
            dispatch(actions.setError('No matching location found.'));
        }
    }
}

export default apiMiddlewareFunction;