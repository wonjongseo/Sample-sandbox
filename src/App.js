//npx create-react-app@5.0.0 my-app

import React from "react";

export default () => {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="Input your Doto "
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            {index + 1}: {toDo}
          </li>
        ))}
      </ul>
    </div>
  );
};
