import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0
};

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                firstCount: state.firstCount + action.value
            }
        case 'DECREMENT':
            return{
                firstCount: state.firstCount - action.value
            }
        case 'RESET':
            return initialState;
        default:
            return state
    }
}

export default function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {count.firstCount}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT', value: 1})}>Increase</button>
      <button onClick={() => dispatch({type: 'INCREMENT', value: 5})}>Increase by 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT', value: 1})}>Decrease</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
  )
}
