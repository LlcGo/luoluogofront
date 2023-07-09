import { vue } from '@vitejs/plugin-vue';
import Index from '../pages/Index.vue'
import Team from '../pages/TeamPage.vue'
import Search from '../pages/searchPage.vue'
import User from '../pages/UserPage.vue'
import Edit from '../pages/EditPage.vue'
import SearchResultPage from '../pages/searchResultPage.vue'
import UserLogin from '../pages/UserLogin.vue'
import AddTeam from "../pages/AddTeam.vue";
import UpdateTeam from "../pages/UpdateTeam.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import CreateTeamPage from "../pages/CreateTeamPage.vue";
import JoinTeamPage from "../pages/JoinTeamPage.vue";
const routes = [
    { path: '/', title:'主页', component: Index },
    { path: '/team', title:'找队伍', component: Team },
    { path: '/team/add',title:'添加队伍', component: AddTeam },
    { path: '/team/my/create', title:'我的的队伍', component: CreateTeamPage },
    { path: '/team/my/join', title:'加入的队伍', component: JoinTeamPage },
    { path: '/team/update', title:'修改队伍', component: UpdateTeam },
    { path: '/user', title:'我的', component: User },
    { path: '/user/update', title:'修改用户', component: UserUpdatePage },
    { path: '/search', title:'查找队伍', component: Search },
    { path: '/user/edit', title:'修改队伍', component: Edit },
    { path: '/user/searchResultPage', title:'队伍页面', component: SearchResultPage },
    { path: '/user/login', title:'登录', component: UserLogin },
  ]
export default routes;
