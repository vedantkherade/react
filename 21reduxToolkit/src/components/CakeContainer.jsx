import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered } from './CakeSlice';


export default function CakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const [cakeNum, setcakeNum] = useState(0);

  return (
    <div>
      <h1>Cake:{numOfCakes}</h1>
      <input type="number" value={cakeNum} onChange={(e) => setcakeNum(e.target.value)}/>
      <button onClick={() => dispatch(ordered(cakeNum))}>Buy Cake</button>
    </div>
  )
}
