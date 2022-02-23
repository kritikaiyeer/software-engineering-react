import TodoItem from "./TodoItem";
import {useState, useEffect} from "react";
// import {findAllTodos, deleteTodo} from "../services/todos-service";
import * as service from "../services/todos-service";
import {createTodo} from "../services/todos-service";


// const TODOS = [
//   {title: "Read Dune", done: true, _id: "123"},
//   {title: "Read Foundation", done: true, _id: "234"},
//   {title: "Read Forever War", done: false, _id: "345"}
// ]

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(n => n * n);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("New Todo");
  useEffect(() => {
    service.findAllTodos()
      .then((response) =>
      setTodos(response.data))
  }, [])
  const title = "My Todo App";
  const addTodo = () => {
    const newTodo = {
      title: newTodoTitle,
      done: false,
      _id: (new Date()).getTime() + ""
    };

    createTodo(newTodo)
      .then((status) => {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
      })
      .catch(e => {})

  }
  const deleteTodo = (todo) => {
    service.deleteTodo(todo._id)
      .then((status) => {
        const newTodos = todos.filter((item) => {
          if (item === todo) {
            return false;
          } else {
            return true;
          }
        });
        setTodos(newTodos);
      })
      .catch((e) => {
        console.log(e);
      })
  }
  const updateTodo = (updatedTodo) => {
    // alert('update todo ' + updatedTodo.done);
    const newTodos = todos.map((oldTodo) =>
    {
      if(oldTodo._id === updatedTodo._id) {
        return updatedTodo
      } else {
        return oldTodo
      }
    });
    setTodos(newTodos);
  }

  return(
    <div className="container">
      <h1>{title}</h1>
      <ul className="list-group">
        {
          todos.map(todo =>
            <TodoItem
              updateTodo={updateTodo}
              removeTodo={deleteTodo}
              todo={todo}/>
          )
        }
      </ul>
      <input value={newTodoTitle}
             onChange={(e) => {
               setNewTodoTitle(e.target.value)
             }}
             placeholder="Buy milk" className="form-control"/>
      <button onClick={addTodo} className="btn btn-success">
        Add todo
      </button>
    </div>
  );
};

export default TodoApp;