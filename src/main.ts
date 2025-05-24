import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入pinia
import { createPinia } from 'pinia'
// 引入antd
import Antd from 'ant-design-vue'
// 引入antd的样式
import "ant-design-vue/dist/reset.css";
// 持久化存储插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(createPinia().use(piniaPluginPersistedstate))
app.mount('#app')