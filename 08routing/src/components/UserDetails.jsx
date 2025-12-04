import React from 'react'
import { useParams } from 'react-router-dom'

const allUsers = [
    {id: 1, name: "Vedant", age: "22", place: "ratnagiri"},
    {id: 2, name: "Akash", age: "22", place: "UP"},
    {id: 3, name: "Sourabh", age: "25", place: "satara"}
]

export default function UserDetails() {
    const {userid} = useParams();

    const user = allUsers.find(u => u.id === Number(userid));  
  return (
    <div>
      {user ? (
        <>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Place: {user.place}</p>
        </>
      ) : (
        <h3>User not found</h3>
      )}
    </div>
  )
}
