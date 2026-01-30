import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/userActions';


export default function Users() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);
    const users = useSelector(state => state.user.users);


    console.log("loading", loading);
    console.log("error", error);
    console.log("users", users);
  return (
    <div>
      
      <h1>Users</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      
        <ul>
          {users && users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      
    </div>
  )
}
