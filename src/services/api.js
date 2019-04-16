import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-ggnogueira.herokuapp.com'
});

export default api;