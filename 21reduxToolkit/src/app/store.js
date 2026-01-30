//step 4

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../components/CakeSlice";
import icecreamReducer from "../components/IceCreamSlice";


export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})

export default store

