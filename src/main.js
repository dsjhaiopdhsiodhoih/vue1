import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/bootstrap.css'
import './index.css'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
const pinia = createPinia();

createApp(App).use(router).use(pinia).use(ElementPlus).use(Vant).mount('#app');

