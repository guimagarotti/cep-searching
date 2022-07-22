import axios from "axios";

const configAPI = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default configAPI;

// 01310930/json/