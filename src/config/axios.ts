import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const config : AxiosRequestConfig= {
    baseURL: import.meta.env.VITE_APP_API_URL || 'http://127.0.0.1:8000',
}

const _axios: AxiosInstance = axios.create(config)

_axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


// Add a response interceptor
_axios.interceptors.response.use(
    (response) => response,
    (error) => {
        // TODO: PENDIENTE LOGICA DE REFRESH TOKEN
        return Promise.reject(error);
    },
);

export default _axios;
