import axios from 'axios'
import urls from "../constants/urls";

axios.defaults.baseURL = urls.apiBaseUrl
axios.defaults.withCredentials = true;

export default axios