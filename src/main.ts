import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入css
import 'normalize.css'
import './assets/css/index.less'

//全局引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//全局引入 pinia
import { createPinia } from 'pinia'
//引入pinia数据持久化
import { createPersistedState } from 'pinia-persistedstate-plugin'

//刷新也能够使pinia的state有值，就在这里运行一次，将缓存中的数据放到pinia中
import { useLogin } from '@/store/login/index'

//引入elemen-plus的icon相关
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)
// app.use(createPinia())
const store = createPinia()
store.use(createPersistedState())
app.use(store)

useLogin().getCacheData()
//这里一定要将路由的注册放到pinia从缓存中提取路由的下面，这样按照代码从上到下的执行顺序，才是先注入路由组件，然后路由功能被注册
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
