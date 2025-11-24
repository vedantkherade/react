import React from 'react'

export default function PropsDrilling() {
  return (
    <div>
      <h2>Assignment 11 — Props Drilling (3 levels)</h2>
      <Level1 name = "Ujjwal" />
    </div>
  )
}

function Level1({name}){
    return <Level2 name = {name} />
}

function Level2({name}){
    return <Level3 name = {name} />
}

function Level3({name}){
    return <h3>Welcome {name}</h3>
}