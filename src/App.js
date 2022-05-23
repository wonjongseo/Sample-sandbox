import React from "react";
import "./styles.css";

export default () => {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h3>Total Count {counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
