import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';


export default function cakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)  

    const dispatch = useDispatch();

    const [cakeNumber, setCakeNumber] = useState(1);

  return (
    <div>
      <h1>Cake: {numOfCakes}</h1>
      <input type="number" value={cakeNumber} onChange={(e) => setCakeNumber(e.target.value) }/>
      <button onClick={() => dispatch(buyCake(cakeNumber))}>Buy Cake</button>
    </div>
  )
}
