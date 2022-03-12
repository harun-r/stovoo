import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
let VueScrollTo = require('vue-scrollto');

const app = createApp(App)
app.use(router)
app.use(VueScrollTo)
app.mount('#app')

