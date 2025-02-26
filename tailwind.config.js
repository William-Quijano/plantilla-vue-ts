/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-', // Prefijo para todas las clases de Tailwind
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Opcional: Deshabilita los estilos base si tienes conflictos con Vuetify
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
