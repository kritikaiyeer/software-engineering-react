import axios from "axios";

const TODO_API = "http://localhost:4000/todos";

export const findAllTodos = async () => {
    const response = await axios.get(TODO_API);
    const todos = response.data;
    return todos;
}

export const deleteTodo = async (tid) => {
    const response = await axios.delete(`${TODO_API}/${tid}`);
    const todos = response.data;
    return todos;
}

export const createTodo = async (todo) => {
    const response = await axios.post(TODO_API, todo);
    const todos = response.data;
    return todos;
}

export const updateTodo = async (tid, todo) => {
    const response =
        await axios.put(`${TODO_API}/${tid}`, todo);
    const todos = response.data;
    return todos;
}