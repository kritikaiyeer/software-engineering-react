const TodoItem = ({todo, removeTodo, changeTodo}) => {
  return(
    <li className="p-2 list-group-item position-relative text-nowrap">
      <input id={todo._id}
        onClick={(e) => changeTodo({
          ...todo, done: e.target.checked
        })}
        type="checkbox"
        checked={todo.done}/>
    <input onChange={(e) => changeTodo({
        ...todo, title: e.target.value
        })} value={todo.title} className="form-control w-75 d-inline  border-0"/>
      <button onClick={() => removeTodo(todo)}
              className="btn btn-sm btn-danger float-end">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;