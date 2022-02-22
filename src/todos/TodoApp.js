import {TodoItem} from "./TodoItem";
import React, {useState} from "react";

const TODOS = [
  {title: "Read Dune", done: true, _id: "123"},
  {title: "Read Foundation", done: true, _id: "234"},
  {title: "Read Forever War", done: false, _id: "345"}
]
const TodoApp = () => {
  const [todos, setTodos] = useState(TODOS);
  const [todoTitle, setTodoTitle] = useState("");
  const remove = (todo) => {
    const newTodos = todos.filter(t => t !== todo);
    setTodos(newTodos);
  }
  const add = () => {
    const randomId = (new Date()).getTime() + "";
    const newTodo = {
      title: todoTitle, done: false, _id: randomId
    }
    setTodos([...todos, newTodo]);
  }
  const update = (updatedTodo) => {
    const newTodos = todos.map(
      todo => {
        if (todo._id === updatedTodo._id) {
          return updatedTodo
        } else {
          return todo;
        }
      }
    );
    setTodos(newTodos);
  };
  return(
    <div>
      <h1>Todo App</h1>
      <ul>
        {
          todos.map(todo =>
            <TodoItem key={todo._id}
                      update={update}
                      remove={remove}
                      todo={todo}/>
          )
        }
      </ul>
      <input placeholder="Buy milk"
             onChange={(e) => setTodoTitle(e.target.value)}
             value={todoTitle}
             className="form-control d-inline w-75"/>
      <button
        onClick={add}
        className="btn btn-success float-end">
        Add
      </button>
    </div>
  );
};

export default TodoApp;