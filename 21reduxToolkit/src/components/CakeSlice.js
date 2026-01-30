//step 1
import {createSlice} from "@reduxjs/toolkit";

//step 2
const initialState = {
    numOfCakes: 20
}

//step 3
//slice creation
// in reducers we dont have to explicitely return the new state and we can directly mutate the value in state
// create slice automatically creates action creators with the name reducers

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes = state.numOfCakes - action.payload;
        }
    }
})

export default cakeSlice.reducer;
export const {ordered} = cakeSlice.actions