import React, { Component } from "react";

class TodoItem extends Component {
  state = {
    editing: false,
    id: null,
    value: ""
  };
  removeTodo = id => {
    console.log(id);
    this.props.removeTodo(id);
  };
  editTodo = (id, value) => {
    console.log(id);
    console.log(value);
    this.setState({ id: id, value: value });
  };

  updateTodo = (id, value) => {
    console.log(id);
    this.props.updateTodo(id, value);
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    var viewStyle = {};
    var editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      <li style={{ listStyleType: "none", padding: "12px 2px" }}>
        <div style={viewStyle}>
          <span style={{ marginRight: "15%", fontFamily: "Comic Sans MS" }}>
            {!this.state.edit ? this.props.todo.text : null}
          </span>
          <button
            style={{ margin: "2px" }}
            type="button"
            className="btn btn-danger"
            onClick={() => this.removeTodo(this.props.todo.id)}
          >
            Remove
          </button>
          <button
            type="button"
            style={{ margin: "2px" }}
            className="btn btn-success"
            onClick={() => {
              this.setState({ editing: true });
              this.editTodo(this.props.todo.id, this.props.todo.text);
            }}
          >
            Edit
          </button>
        </div>
        <div style={editStyle}>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.setState({ editing: false });
              this.updateTodo(this.state.id, this.state.value);
            }}
          >
            <input
              type="text"
              autoFocus
              defaultValue={this.state.value}
              onChange={this.handleChange}
              style={{ marginRight: "10%" }}
            />
            <button
              type="button"
              style={{ margin: "2px" }}
              className="btn btn-warning"
              onClick={() => {
                console.log(this.state.id);
                this.setState({ editing: false });
                this.updateTodo(this.state.id, this.state.value);
              }}
            >
              Update
            </button>
          </form>
        </div>
      </li>
    );
  }
}

export default TodoItem;
