import { createApp } from 'vue'
import App from './App.vue'
import { Button,NavBar,Icon,Tabbar, TabbarItem, Divider} from 'vant';
import * as VueRouter from 'vue-router'
import routes from './config/route';
const app = createApp(App)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Divider);
app.use(Icon)
app.use(NavBar)
app.use(Button)
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
app.use(router)
.mount('#app');




