// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/plugins.css'
import '@/assets/search/search.css'
import '@/assets/quform/css/base.css'
import '@/assets/css/styles.css'
import '@/assets/css/custom.css'

const app = createApp(App);
app.use(router);
app.mount('#app');

