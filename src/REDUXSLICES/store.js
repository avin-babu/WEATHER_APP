import { configureStore } from "@reduxjs/toolkit";
import ValueSlice from "./ValueSlice";
import ApiSlice from "./ApiSilce";

const store = configureStore({
    reducer: {
        value: ValueSlice.reducer,
        apivalues: ApiSlice.reducer
    }
})

export default store;