import { BUY_ICECREAM } from "./icecreamTypes"
import { BUY_COMBO } from "../combo/comboType"







const initialState = {
    numOfIcecream: 20
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, numOfIcecream: state.numOfIcecream - action.payload
        }
        case BUY_COMBO: return{
                    ...state, numOfIcecream: state.numOfIcecream -1,
              
                }
        default: return state
    }
}

export default icecreamReducer;

