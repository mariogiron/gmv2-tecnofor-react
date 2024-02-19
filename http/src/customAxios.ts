import axios from "axios";

const instance = axios.create({
    baseURL: 'https://peticiones.online/api',
});

export default instance;