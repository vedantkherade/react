import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    let {id} = useParams();
  return (
    <div>
      <h2>Product Page</h2>
      <h3>Product with id: {id}</h3>
    </div>
  )
}
