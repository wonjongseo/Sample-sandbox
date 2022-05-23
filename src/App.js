import React from "react";
import "./styles.css";

const Title = () => <h3>Total Click : 0</h3>;
const Button = () => <button>Click Me</button>;
const Container = () => {
  return (
    <div>
      <Title />
      <Button />
    </div>
  );
};
export default () => {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Total Count {counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
