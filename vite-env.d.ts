/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_VUE_APP_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
