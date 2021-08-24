import axios from "axios";

const api = axios.create({
    // baseURL: 'https://611cc3e6c7035d001754118f.mockapi.io/api',
    baseURL: 'http://localhost:8080',
});

export default api;