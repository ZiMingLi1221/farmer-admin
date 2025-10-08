import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

// 全局註冊 Naive UI
import naive from 'naive-ui'

// 導入樣式
import './assets/base.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(naive)  // ✅ 添加這一行

app.mount('#app')
