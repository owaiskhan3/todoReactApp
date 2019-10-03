import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import TodoInput from "./Components/TodoInput";
import Todolist from "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    todos: [{ id: 1, text: "Dinner" }, { id: 2, text: "Lunch" }],
    nextId: 3
  };

  addTodo = todo => {
    let todos = [...this.state.todos];

    todos.push({ id: this.state.nextId, text: todo });

    let nextId1 = this.state.nextId;
    this.setState({ nextId: nextId1 + 1 });
    this.setState({ todos });
    console.log(todos);
  };

  removeTodo = id => {
    console.log(id);
    let todos = [...this.state.todos];
    let todosUpdated = todos.filter(todo => {
      return todo.id !== id;
    });
    console.log(todosUpdated);
    this.setState({
      todos: todosUpdated
    });
  };

  updateTodo = (id, value) => {
    console.log(id);
    console.log(value);
    let editTodos = [...this.state.todos];

    editTodos.forEach(todo => {
      if (todo.id === id) {
        console.log(todo);
        todo.text = value;
      }
    });
    // console.log(editTodos);

    this.setState({
      todos: editTodos
    });
    // console.log(this.state.todos);
  };

  render() {
    return (
      <div className="App">
        <Heading />
        <TodoInput addTodo={this.addTodo} />
        <Todolist
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default App;
