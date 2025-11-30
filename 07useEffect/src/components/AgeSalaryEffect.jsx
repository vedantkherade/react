import React, { useEffect, useState } from 'react'

export default function AgeSalaryEffect() {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    useEffect(() => {
        if(age > 0 && salary > 0){
            console.log(`Age: ${age}, Salary: ${salary}`);
        }
    },[age, salary])

  return (
    <div>
      <h2>Assignment 11 — Run effect only when BOTH values change at least once</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age: {age}</button>
      <button onClick={() => setSalary(salary + 1000)}>Increase Salary: {salary}</button>
    </div>
  )
}
