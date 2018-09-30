import React, { Component } from "react";
import ToDolist from "./components/todolist.js";

class App extends Component {
  render() {
    return (
      <div>
        <ToDolist title="To Do List" />
      </div>
    );
  }
}

export default App;
