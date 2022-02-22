export const TodoItem = ({todo, remove}) => {
  return (
    <li className="p-1">
      <input type="checkbox"
             checked={todo.done}/>
      {todo.title}
      <button onClick={() => remove(todo)}
              className="btn btn-sm btn-danger float-end">
        Delete</button>
    </li>
  );
};