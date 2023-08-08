import React, { useState } from "react";

//import FunctionalComponent from "./FunctionalComponent";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { lName: value, fName: prevValue.fName };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
