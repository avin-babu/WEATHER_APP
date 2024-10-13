import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: {
        tempCelsius : null,
        condition:null,
        humidity:null,
        uvIndex:null,
        location:null,
        image:null,
        error: null,
    },
    reducers:{
        tempCelsiusFunction: (state, {payload})=>{
            state.tempCelsius = payload;
        },
        setCondition: (state,{payload})=>{
            state.condition = payload;
        },
        setHumidity: (state,{payload})=>{
            state.humidity = payload;
        },
        setUvIndex: (state,{payload})=>{
            state.uvIndex = payload;
        },
        setLocation:(state,{payload})=>{
            state.location = payload;
        },
        setImage: (state,{payload})=>{
            state.image = payload;
        },
        clearValues: (state)=>{
            state.condition = null;
            state.humidity = null;
            state.image = null;
            state.location = null;
            state.tempCelsius = null;
            state.uvIndex = null;
            state.error = null;
        },
        setError: (state,{payload})=>{
            state.error = payload;
        },
        clearError: (state)=>{
            state.error = "";
        }
    }
})

export default ApiSlice;