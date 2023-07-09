import { createApp } from 'vue'
import App from './App.vue'
import { Button,NavBar,Icon,Tabbar, Cell, CellGroup,TabbarItem,
  Form, Field, CellGroup, Divider, Col, Row ,TreeSelect, Button,Empty,Toast } from 'vant';
import * as VueRouter from 'vue-router'
import routes from './config/route';
import './gloab.css'
const app = createApp(App)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Divider);
app.use(Icon)
app.use(NavBar)
app.use(Button)
app.use(Col);
app.use(Cell);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(CellGroup);
app.use(Toast);
app.use(Row);
app.use(Empty);
app.use(Button);
app.use(TreeSelect);
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
  })
app.use(router)
.mount('#app');

