import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colorArrays = new Values(color).all(10);
      setList(colorArrays);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f1fef5"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? `error` : null}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default App;
