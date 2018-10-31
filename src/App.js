import React, { Component } from "react";
import ToDolist from "./components/todolist.js";
import WeatherData from "./components/weatherdata.js";

class App extends Component {
  render() {
    return (
      <div>
        <ToDolist title="To Do List" />
        <WeatherData />
      </div>
    );
  }
}

export default App;
