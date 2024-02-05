import axios from "axios";

export const externalApi = `https://viacep.com.br/ws/`

const api = axios.create({
    baseURL: externalApi
});

export default api