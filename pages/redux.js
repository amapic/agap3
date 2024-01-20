import React, { Component } from "react";
import { connect } from "react-redux";

let ActionTypes={
    ADD_TODO:"dfhd"

}

const addTodo = (title) => ({
  type: ActionTypes.ADD_TODO,
  title,
});

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch(addTodo(title)),
});

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// export default ConnectedTodoList;

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <ConnectedTodoList />
    </div>
  );
}

export default App;
