import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

// Vue.config.procutionTip = false; // 앱이 처음 시작될 때 경고문을 출력할 것인가 -> false default


const app = createApp(App);
app.use(router);
// app.use(store);
app.mount('#app');