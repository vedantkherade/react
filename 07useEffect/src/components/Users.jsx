import { useEffect, useState } from "react";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}