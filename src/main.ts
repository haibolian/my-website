import { createApp } from 'vue'
import router from './router'
import store from './store'

// element-plus
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// LUI
import LUI from './LUI/index'
import './LUI/style/index.scss'

// 注册全局组件
import globalComponent from './components/index.js'

// 样式文件
import './style/index.css'
// 引入图标
import './icons'

import App from './App.vue'
const app = createApp(App)

app.use(globalComponent)
app.use(LUI)
app.use(ElementUI, {locale: zhCn})
app.use(store).use(router).mount('#app')
