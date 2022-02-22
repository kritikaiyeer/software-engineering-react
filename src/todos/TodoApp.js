import {TodoItem} from "./TodoItem";
import React, {useState} from "react";

const TODOS = [
  {title: "Read Dune", done: true, _id: "123"},
  {title: "Read Foundation", done: true, _id: "234"},
  {title: "Read Forever War", done: false, _id: "345"}
]
const TodoApp = () => {
  const [todos, setTodos] = useState(TODOS);
  const remove = (todo) => {
    const newTodos = todos.filter(t => t !== todo);
    setTodos(newTodos);
  }
  const add = () => {
    const randomId = (new Date()).getTime() + "";
    const newTodo = {
      title: "New Todo", done: false, _id: randomId
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }
  return(
    <div>
      <h1>Todo App</h1>
      <ul>
        {
          todos.map(todo =>
            <TodoItem key={todo._id}
                      remove={remove}
                      todo={todo}/>
          )
        }
      </ul>
      <button
        onClick={add}
        className="btn btn-sm btn-success">
        Add
      </button>
    </div>
  );
};

export default TodoApp;