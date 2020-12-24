import React, { Fragment } from "react";
import "./App.css";

//components

import TodoInput from "./components/TodoInput";
import TodoView from "./components/TodoView";

function App() {
  return (
    <Fragment>
      <div className="container">
        <TodoInput />
        <TodoView />
      </div>
    </Fragment>
  );
}

export default App;
