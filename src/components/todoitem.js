import React, { Component } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Item = styled.div`
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 7px;
  color: ${props => (props.done ? "green" : "auto")}
  text-decoration: ${props => (props.done ? "line-through" : "auto")}
`;

const Remover = styled.button`
  border-radius: 4px;
  background: #232632;
  border: 0px;
  width: 10%;
  color: white;
  cursor: pointer;
`;

const Editor = styled.button`
  border-radius: 4px;
  background: #232632;
  border: 0px;
  width: 10%;
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border 2px solid #343744;
  background: #232632;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 5px;
  witdh: 10px;
  cursor: pointer;
`;

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  };

  state = {
    done: this.props.done
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  componentWillUnmount = () => {
    console.log(`todo ${this.props.text} unmounted...`);
  };

  render() {
    const { text } = this.props;
    return (
      <Container>
        <Editor onClick={this.props.editTask.bind(this, this.props.task)}>
          <FaEdit />{" "}
        </Editor>
        <Item onClick={this.toggleDone} done={this.state.done}>
          {text}
        </Item>
        <Remover onClick={this.props.removeTask.bind(this, this.props.task)}>
          <FaTrashAlt />
        </Remover>
      </Container>
    );
  }
}

export default ToDoItem;
