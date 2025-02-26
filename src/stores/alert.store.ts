import {defineStore} from "pinia";
import {alertProps, piniaStoreProps} from "../interfaces/index.ts";
import {reactive} from "vue";


export const useAlertStore: piniaStoreProps = defineStore('alerts', () => {
    let propsAlert: alertProps = reactive({
            type: '',
            message: '',
            title: '',
            show: false,
            timeout: 5000
        }
    )

    const $resetAlertState = () => {
        const alert: alertProps = {
            type: '',
            message: '',
            title: '',
            show: false,
            timeout: 5000
        }
        Object.assign(propsAlert, alert)
    }

    const $showAlert = (alert: alertProps) => {
        Object.assign(propsAlert, alert)

    }


    return {propsAlert, $resetAlertState, $showAlert}
}, {
    persist: false,
},)
