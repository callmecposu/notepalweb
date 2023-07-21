import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'


console.log(process.env.VUE_APP_API_URL);

createApp(App).use(router).use(VueCookies).mount('#app')
