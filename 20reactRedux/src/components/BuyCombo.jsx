import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyCombo } from "../redux/combo/comboActions";

export default function BuyCombo() {


  const dispatch = useDispatch();

  return (
    <div>
    
      <button onClick={() => dispatch(buyCombo())}>Buy Combo</button>
    </div>
  );
}
