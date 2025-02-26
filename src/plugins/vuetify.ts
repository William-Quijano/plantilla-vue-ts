/**
 * Vuetify3 Plugin
 */
import {createVuetify, type VuetifyOptions} from 'vuetify';
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Translations provided by Vuetify
import {es} from 'vuetify/locale';

// Styles
import '@/assets/styles/main.scss'
import themeVuetify from "@/assets/styles/theme-vuetify.ts";
import '~/@mdi/font/css/materialdesignicons.css';

//configuration
let vuetifyConfig: VuetifyOptions = {
    treeShake: true,
    locale: {
        locale: 'es',
        fallback: 'es',
        messages: {es},
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
    ...themeVuetify
};

export default createVuetify(vuetifyConfig);
// export default createVuetify({
//     theme: false,
// });


// Export for test.
export {components, directives};
