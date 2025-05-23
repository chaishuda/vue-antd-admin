import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/reset.css";

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(createPinia())
app.mount('#app')