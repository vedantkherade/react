import React, { useState } from "react";

const MiniForm = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${form.name}, City: ${form.city}, Age: ${form.age}`);
  }

  return (
    <div>
      <h2>Assignment 8: Mini Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <br />

        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h4>Live Preview</h4>
      <p>Name: {form.name || "-"}</p>
      <p>City: {form.city || "-"}</p>
      <p>Age: {form.age || "-"}</p>
    </div>
  );
};

export default MiniForm;
