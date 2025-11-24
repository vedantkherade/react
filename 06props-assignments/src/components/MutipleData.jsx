import React from "react";

export default function MutipleData(props) {
  return (
    <div>
      <h2> Assignment 5 — Pass multiple data types as props</h2>
      <p>
        Name: {props.name} Age: {props.age} Is Online: {props.isOnline}
      </p>
    </div>
  );
}
