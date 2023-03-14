import { useState } from "react";
import Values from "values.js";
import { Colors } from "./index";

function App() {
  const [color, setColor] = useState("#222");
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    new Promise((res) => {
      const valueColors = new Values(color).all(10);
      res(valueColors);
    }).then((data) => {
      setList(data);
      setIsLoading(false);
      console.log(data);
    });
  };

  return (
    <div className="container">
      <h1>Header</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="color__input"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      {isLoading ? <h1>Loading</h1> : <Colors obj={list} />}
    </div>
  );
}

export default App;
