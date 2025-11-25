import React from 'react'

export default function Drilling4lvl() {
  return (
    <div>
      <h2>Assignment 15 — Props Drilling (4 Levels) + Conditional Rendering</h2>
       <Level1 status="Online" />
    </div>
  )
}

function Level1({ status }) {
  return <Level2 status={status} />
}

function Level2({ status }) {
  return <Level3 status={status} />
}

function Level3({ status }) {
  return <StatusBox status={status} />
}

function StatusBox({status}){
    const style = {
    color: status === "Online" ? "green" : "red"
  }

  return(
    <h3 style={style}>
        {status}
    </h3>
  )
}