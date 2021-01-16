import axios from 'axios';
const instance = axios.create({
    baseURL: "https://tik-tok-backend-k.herokuapp.com/",
})
export default instance