import React from 'react'

export default function Skills(props) {
  return (
    <div>
      <h2>Assignment 6 — Pass an array as props and list items</h2>
      {props.list.map((skill, index) => (
        <li id={index}>{skill}</li>
      ))}
    </div>
  )
}
