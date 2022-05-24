//npx create-react-app@5.0.0 my-app

import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
