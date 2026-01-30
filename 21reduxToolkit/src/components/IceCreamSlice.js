//step 1
import {createSlice} from "@reduxjs/toolkit";
import {ordered} from "./CakeSlice";

//step 2
const initialState = {
    numOfIcecream: 20
}

//step 3
//slice creation
// in reducers we dont have to explicitely return the new state and we can directly mutate the value in state
// create slice automatically creates action creators with the name reducers

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        orderedTwo: (state, action) => {
            state.numOfIcecream = state.numOfIcecream - action.payload;
        }
    },
   extraReducers: builder => {
    builder.addCase(ordered, state => {
        state.numOfIcecream--;
    })
   }
})

export default icecreamSlice.reducer;
export const {orderedTwo} = icecreamSlice.actions