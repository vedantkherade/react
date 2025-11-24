import React from 'react'

const ReturnAge = () => {
    const age = 20;

    function Adult(){
       return <p>You are Adult</p>
    }
    function Minor(){
       return <p>You are Minor</p>
    }

    

  return (
    <div>
      <h2>Assignment 3 — Return different components based on age</h2>
      {age >= 18 ? <Adult/> : <Minor/>}
    </div>
  )
}

export default ReturnAge
