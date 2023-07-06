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
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/team/add', component: AddTeam },
    { path: '/team/my/create', component: CreateTeamPage },
    { path: '/team/my/join', component: JoinTeamPage },
    { path: '/team/update', component: UpdateTeam },
    { path: '/user', component: User },
    { path: '/user/update', component: UserUpdatePage },
    { path: '/search', component: Search },
    { path: '/user/edit', component: Edit },
    { path: '/user/searchResultPage', component: SearchResultPage },
    { path: '/user/login', component: UserLogin },
  ]
export default routes;
