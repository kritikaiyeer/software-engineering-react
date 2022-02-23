const TodoItem = ({todo, removeTodo, updateTodo}) => {
  return(
    <li className="list-group-item">
      <input
        onClick={(e) => updateTodo({
          ...todo, done: e.target.checked
        })}
        checked={todo.done}
        type="checkbox"/>
      {todo.title}
      <button
        onClick={() => removeTodo(todo)}
        className="btn btn-danger float-end">
        Delete</button>
    </li>
  );
};

export default TodoItem;