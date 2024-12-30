import axios from 'axios';

const BASE_URL = 'https://retoolapi.dev/E6LSEs/user';

export const getUsers = () => axios.get(BASE_URL);
export const getUserById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addUser = (user) => axios.post(BASE_URL, user);
export const updateUser = (id, user) => axios.put(`${BASE_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);
