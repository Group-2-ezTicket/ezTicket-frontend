import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:8080'
    baseURL:'https://group2-ita06-ezticket-backend.herokuapp.com'
 });
 
export default api;