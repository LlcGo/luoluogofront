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
<div>
  <template v-if="active == 'index'">
    <Index/>
  </template>
  <template v-if="active == 'tream'">
    <Tream/>
  </template>
</div>
<van-tabbar v-model="active" >
  <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
  <van-tabbar-item icon="search" name="tream">队伍</van-tabbar-item>
  <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
</van-tabbar>

</template>


<script setup>
import Index from '../pages/Index.vue'
import Tream from '../pages/Team.vue'
import { ref } from 'vue';
import { showToast } from 'vant';
const onClickLeft = () => alert('左');
const onClickRight = () => alert('右边');
 const active = ref("index");
    // const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>
