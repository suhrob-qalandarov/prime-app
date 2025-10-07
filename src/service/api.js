import axios from 'axios'

axios.defaults.baseURL = 'https://api.howdy.uz/api/v1/'
axios.defaults.withCredentials = true;

export default axios