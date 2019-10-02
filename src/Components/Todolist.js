import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todolist extends Component {
  state = {};
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              id={todo.id}
              removeTodo={this.props.removeTodo}
              updateTodo={this.props.updateTodo}
            />
          );
        })}
      </ul>
    );
  }
}

export default Todolist;
