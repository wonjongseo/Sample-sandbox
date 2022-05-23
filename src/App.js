import React from "react";
import "./styles.css";

export default () => {
  const [minutes, setMinutes] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
      }}
    >
      <h1 className="converter" style={{ marginBottom: "30px" }}>
        Converter
      </h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          onChange={onChange}
          value={flip ? minutes * 60 : minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          disabled={flip}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flip ? minutes : Math.floor(minutes / 60)}
          id="hours"
          placeholder="Houres"
          type="number"
          disabled={!flip}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            reset();
            setFlip((prev) => !prev);
          }}
        >
          Flip
        </button>
      </div>
    </div>
  );
};
