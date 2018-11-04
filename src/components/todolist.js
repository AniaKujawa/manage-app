import React, { Component } from "react";
import "../App.css";
import ToDoItem from "./todoitem";
import NewToDoTask from "../containers/newtasktodo";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  background: #002233;
  margin-left: 270px;
  width: 30%;
  max-width: 600px;
  padding: 14px
  border-radius: 14px;
  margin-top: 40px;
`;

// background: #2b2e39;

const Header = styled.h1`
  color: #fff;
`;

const DestroyButton = styled.button`
  background: #232632;
  color: #e91640;
  width: 100px;
  height: 40px;
  font-size: 0.7em;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #a30f2d;
    color: white;
  }
`;

class ToDolist extends Component {
  constructor() {
    super();
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")),
      newTask: "",
      isEdit: 0
    };
  }

  HandleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  HandleSubmit = () => {
    const { newTask, tasks } = this.state;
    const list = tasks;
    if (this.state.isEdit) {
      var todos = this.state.tasks;
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === this.state.isEdit) {
          todos[i].text = newTask;
          localStorage.setItem("tasks", JSON.stringify(todos));
        }
      }
      this.setState({
        newTask: "",
        isEdit: 0,
        tasks: JSON.parse(localStorage.getItem("tasks"))
      });
    } else {
      list.push({
        text: newTask,
        done: false,
        id: Date.now()
      });
      localStorage.setItem("tasks", JSON.stringify(list));
      this.setState({
        newTask: "",
        tasks: JSON.parse(localStorage.getItem("tasks"))
      });
    }
  };

  removeAll = () => {
    var removeConfirm = window.confirm(
      "Do you really want to remove all task?"
    );
    if (removeConfirm == true) {
      const tasks = [];
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
    }
  };

  removeTask = task => {
    var todos = this.state.tasks;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text === task.text) {
        todos.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(todos));
      }
    }
    this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
  };

  editTask = task => {
    this.setState({
      newTask: task.text,
      isEdit: task.id
    });
  };

  render() {
    const { tasks, newTask } = this.state;
    const { title } = this.props;
    return (
      <Container>
        <Header> {title} </Header>
        <DestroyButton onClick={this.removeAll}>
          <FaTrashAlt />
          <span style={{ marginLeft: "10px" }}>Remove all</span>
        </DestroyButton>
        {tasks.map((task, index) => (
          <ToDoItem
            task={task}
            text={task.text}
            done={task.done}
            key={task.id}
            removeTask={this.removeTask}
            editTask={this.editTask}
          />
        ))}
        <NewToDoTask
          onChange={this.HandleChange}
          onSubmit={this.HandleSubmit}
          newTask={newTask}
        />
      </Container>
    );
  }
}

export default ToDolist;
