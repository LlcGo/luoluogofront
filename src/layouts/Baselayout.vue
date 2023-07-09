<template>
  <van-nav-bar
  :title="title"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
<template #right>
    <van-icon name="search" size="18" />
 </template>

</van-nav-bar>
 <div id="content">
  <router-view></router-view>
 </div>


<van-tabbar v-model="active" >
  <van-tabbar-item icon="home-o" to="/" name="index">主页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/team" name="tream">队伍</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/user" name="user">个人</van-tabbar-item>
</van-tabbar>

</template>


<script setup>
import {useRoute, useRouter} from 'vue-router'
import { ref } from 'vue';
import { showToast } from 'vant';
import routes from "../config/route.ts";




const DEFAULT_TITLE = '伙伴匹配'

const title = ref(DEFAULT_TITLE)

const router = useRouter();


router.beforeEach((to, from) => {
       const path = to.path
       const route =  routes.find((route)=>{
            return path === route.path
       })
      title.value = route?.title ?? DEFAULT_TITLE;
    }
)

console.log(router)
const onClickLeft = () => {router.back()};
const onClickRight = () => {router.push('/search')};
 const active = ref('');
    // const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>
#content{
  padding-bottom: 50px;
}
</style>
