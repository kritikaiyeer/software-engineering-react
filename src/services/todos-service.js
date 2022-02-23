import axios from "axios";

const URL = "http://localhost:4000/api/todos";

export const findAllTodos = () => {
  return axios.get(URL);
}

export const deleteTodo = (tid) => {
  return axios.delete(`${URL}/${tid}`);
}

export const createTodo = (todo) =>
  axios.post(URL, todo);