import axios from 'axios';

const api = axios.create({baseURL:'https://fakestoreapi.com'});

api.interceptors.request.use(
    (response) => response,
    (error) => Promise.reject(error)
);
api.interceptors.response.use(
    (response)=>response.data,
    (error)=> Promise.reject(error)
);
export default api;