import axios from 'axios';

const api = axios.create({
    baseURL:'http://10.107.131.21:3000'
});

export default api;