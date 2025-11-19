import { useState } from "react";

function CountStep() {
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);

    function handleIncrease() {
        setCount(count + Number(step));
    }

    return (
        <div>
            <h2>Assignment 1: Step Counter</h2>

            <input type="number" placeholder="Enter step value" value={step} onChange={(e) => setStep(e.target.value)} />

            <p>Count: {count}</p>

            <button onClick={handleIncrease}>Increase by step</button>
        </div>
    )
}

export default CountStep;