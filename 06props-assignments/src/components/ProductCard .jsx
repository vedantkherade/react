import React from 'react'

export default function ProductCard ({title, inStock}) {
  return (
    <div>
      <h2>Assignment 9 — Card that uses ternary with props</h2>
      <h3>{title}</h3>
      {inStock ? <p style={{color: "green"}}>In Stock</p> : <p style={{color: "red"}}>Out of Stock</p>}
    </div>
  )
}
