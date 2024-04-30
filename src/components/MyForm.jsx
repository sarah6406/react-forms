import { useState } from "react";
import "./myform.css";

export default function MyForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(e) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [e.target.name]: e.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleInputChange}
        />
        <p>Current value is: {formValues.name}</p>
        <p>Current value is: {formValues.email}</p>
        <p>Current value is: {formValues.age}</p>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
