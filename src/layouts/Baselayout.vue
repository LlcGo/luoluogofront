<template>
  <van-nav-bar
  title="标题"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
<template #right>
    <van-icon name="search" size="18" />
 </template>
</van-nav-bar>
 
 <router-view></router-view>

<van-tabbar v-model="active" >
  <van-tabbar-item icon="home-o" to="/" name="index">主页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/team" name="tream">队伍</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/user" name="user">个人</van-tabbar-item>
</van-tabbar>

</template>


<script setup>
import {useRouter} from 'vue-router'
import { ref } from 'vue';
import { showToast } from 'vant';

const router = useRouter();
console.log(router)
const onClickLeft = () => {router.push('/')};
const onClickRight = () => {router.push('/search')};
 const active = ref("index");
    // const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>
