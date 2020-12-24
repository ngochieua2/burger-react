import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-74915-default-rtdb.firebaseio.com/'
});

export default instance;