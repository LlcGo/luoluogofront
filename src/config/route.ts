import Index from '../pages/Index.vue'
import Team from '../pages/TeamPage.vue'
import Search from '../pages/searchPage.vue'
import User from '../pages/UserPage.vue'
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: Search },
  ]
export default routes;  