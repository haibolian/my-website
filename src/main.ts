import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import LUI from './LUI/index'

import globalComponent from './components/index.js'

import App from './App.vue'

import './icons'
import './style/index.css'

const app = createApp(App)

app.use(globalComponent)
app.use(LUI)
app.use(ElementUI)
app.use(store).use(router).mount('#app')
