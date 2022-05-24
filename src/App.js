//npx create-react-app@5.0.0 my-app

import React from "react";
import Button from "./Button";
import styles from "./App.module.css";

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome to React!!</h1>
      <Button text="Helo" />
    </div>
  );
};
