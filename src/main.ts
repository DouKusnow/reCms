import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入css
import 'normalize.css'
import './assets/css/index.less'

//全局引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//全局引入 pinia
import { createPinia } from 'pinia'

//刷新也能够使pinia的state有值，就在这里运行一次，将缓存中的数据放到pinia中
import { useLogin } from '@/store/login/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
useLogin().getCacheData()

app.mount('#app')
