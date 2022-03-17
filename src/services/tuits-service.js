import axios from "axios";

// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com";
const BASE_URL = "http://localhost:4000";

const TUITS_API = 'http://localhost:4000/api/tuits';
const USERS_API = 'http://localhost:4000/api/users';

// const api = axios.create({
//     withCredentials: true
// });

export const findAllTuits = () =>
    axios.get(TUITS_API)
        .then(response => response.data);

export const findTuitById = (tid) =>
    axios.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const findTuitByUser = (uid) =>
    axios.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);

export const createTuit = (uid, tuit) =>
    axios.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

export const updateTuit = (tid, tuit) =>
    axios.post(`${TUITS_API}/${tid}`, tuit)
        .then(response => response.data);

export const deleteTuit = (tid) =>
    axios.delete(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const deleteAllTuit = () =>
        axios.get(`${TUITS_API}/delete`)
            .then(response => response.data);
