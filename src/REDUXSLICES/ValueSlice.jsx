import { createSlice } from "@reduxjs/toolkit";

const ValueSlice = createSlice({
    name: "ValueSlice",
    initialState:{
        value: "",
    },
    reducers:{
        addValue:(state,{payload})=>{
            state.value = payload;
        },
        clearValue: (state)=>{
            state.value = "";
        }
    }
})

export default ValueSlice;