import {HttpClientProps} from "../interfaces";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import instanceAxios from "../config/axios.ts";
import {useAlertStore, useAuthStore} from "../stores";


const {token} = useAuthStore();
const { $showAlert } = useAlertStore();

const UseHttpClient = async ({
                                 url = '',
                                 data = {},
                                 method = 'get',
                                 headers = {},
                                 sendToken = false
                             }: HttpClientProps): Promise<AxiosResponse> => {

    if (token && sendToken) headers.Authorization = `Bearer ${token}`;

    const config: AxiosRequestConfig = {
        method,
        headers,
        url,
    }

    if (method === 'get') {
        config.params = data;
    } else {
        config.data = data;
    }

    try {
        return await instanceAxios(config);
    } catch (e) {
        if (e.response.status === 500) {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                || e.response.data.description
                || "Ha ocurrido un error interno",
                type: "error"
            })

        } else if (e.response.status === 422) {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "No se pudo procesar la entidad",
                type: "error"
            })
        } else if (e.response.status === 404) {

            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "No se encontró el recurso",
                type: "error"
            })
        } else if (e.response.status === 403) {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "Petición rechazada",
                type: "error"
            })
        } else if (e.response.status === 400) {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "Petición incorrecta",
                type: "error"
            })
        } else if (e.response.status === 401) {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "Acceso no autorizado",
                type: "error"
            })
        } else {
            $showAlert({
                title: "Error",
                message: e.response.data.message
                    || e.response.data.description
                    || "Error al realizar petición",
                type: "error"
            })
        }
        throw e;
    }
}


export default UseHttpClient
