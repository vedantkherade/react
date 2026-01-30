//step 4

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../components/CakeSlice";
import icecreamReducer from "../components/IceCreamSlice";
import logger from "redux-logger";
import userReducer from "../components/userSlice";



// middleware is defined after reducer inside configureStore
// the middleware prop takes a callback function and that function takes getDefaultMiddleware as arg
// we then getDefaultMiddleware().concat(logger). This is odone by configure store by default applies some
// middleware in store setup so we need to concat the list with additional middleware.

export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

