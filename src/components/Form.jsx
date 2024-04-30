import { useState } from "react";
import "./form.css";
export default function Form() {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  // handle form inout field value being changed by user
  function handleInputChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>This is a simple input:</p>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange} // connect the handler to the onChange event
      />
      <p>Current value is: {name}</p>
      {/* {console.log(name)} */}
      <button type="submit">Submit</button>
      <div className="buttons">
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" />
        </label>
        <label>
          Radio Button: <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          Radio Button: <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          Radio Button: <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </div>
    </form>
  );
}
