import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'es6-promise/auto'

// Vue.config.procutionTip = false;

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');