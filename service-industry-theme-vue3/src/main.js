// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n';
import store from './store';


import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/plugins.css";
import "@/assets/css/styles.css";
import "@/assets/css/custom.css";

const app = createApp(App);
app.use(store);
app.use(router);


app.use(i18n);
app.mount("#app");
