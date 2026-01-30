import React, {  useEffect } from 'react'
import { fetchUsers } from './UserSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function UserContainer() {

    const { loading, data, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Users</h1>
       <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>

    </div>
  )
}
