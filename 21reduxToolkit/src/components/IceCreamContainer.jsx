import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderedTwo } from './IceCreamSlice';

export default function IceCreamContainer() {
  const numOfIceCream = useSelector(
    state => state.icecream.numOfIcecream
  );

  const dispatch = useDispatch();
  const [icecreamNum, setIcecreamNum] = useState(0);

  return (
    <div>
      <h1>Icecream: {numOfIceCream}</h1>

      <input
        type="number"
        value={icecreamNum}
        onChange={(e) => setIcecreamNum(e.target.value)}
      />

      <button
        onClick={() => dispatch(orderedTwo(Number(icecreamNum)))}
      >
        Buy Icecream
      </button>
    </div>
  );
}
