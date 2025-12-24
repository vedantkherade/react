import React from "react";

const UserCard = React.memo(function UserCard({ user}){
    console.log("UserCard re-rendered");

    return (
      <div>
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
      </div>
    );
})

export default UserCard;