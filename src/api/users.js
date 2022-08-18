import axios from 'axios';

export const getUsers = () => {
  return axios
    .get(`http://localhost:4000/users`)
    .then(res => console.log(res.data));
};

export const addUsers = data => axios.post(`http://localhost:4000/users`, data);
