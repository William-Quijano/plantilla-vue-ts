import {defineStore} from "pinia";
import {piniaStoreProps} from "../interfaces/index.ts";
import {ref} from "vue";


export const useAuthStore: piniaStoreProps = defineStore('auth', () => {
    let token: string = ref(null)

    const $setToken = (payload: string) => {
        token.value = payload
    }

    return {token, $setToken}
}, {
    persist: true,
},)
