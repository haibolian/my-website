import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'


const app = createApp(App)

app.use(ElementUI)
app.use(store).use(router).mount('#app')
