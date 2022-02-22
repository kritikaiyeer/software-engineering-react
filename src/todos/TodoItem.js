export const TodoItem = ({todo, remove, update}) => {
  return (
    <li className="p-1">
      <input type="checkbox"
             onClick={(e) =>
               update({...todo, done: e.target.checked}
             )}
             checked={todo.done}/>
      {todo.title}
      <button onClick={() => remove(todo)}
              className="btn btn-sm btn-danger float-end">
        Delete</button>
    </li>
  );
};