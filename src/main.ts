import {createApp} from 'vue'
import {createPinia} from 'pinia'
import draggable from "vuedraggable";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vuetify from '@/plugins/vuetify'
import router from '@/routes'
import App from './App.vue'



const pinia = createPinia()
const app = createApp(App)


app.use(vuetify)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)

// Transforma todo los componentes de la carpeta componets en globales

const components = import.meta.glob('./components/**/*.vue', {eager: true})
Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(componentName.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase(), definition.default)
})

app.mount('#app')
