<template>
  <user-card-list :user-list="userList">
  </user-card-list>
  <van-empty v-if="userList == null || userList.length < 1" image-size="10rem" description="数据为空" />
</template>
  
<script setup>
import UserCardList from  '../components/UserCardList.vue' 
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import qs from "qs";
import myAxios from "../plugin/myAxios";
const route = useRoute();
//获取页面路由过来的数据
const { tags } = route.query;

const userList = ref([]);

onMounted(async () => {
  const resDate = await myAxios
    .get("/user/recommend", {
      params: {
        pageSize:8,
        pageNum:1,
      }
    })
    .then(function(response) {
      // 处理成功情况
      console.log("/user/recommend", response.date);
      return response?.date?.records;
    })
    .catch(function(error) {
      // 处理错误情况
      console.log(error);
    });
  console.log("/user/recommend", resDate);
  if (resDate) {
    resDate.forEach(user => {
      user.tags = JSON.parse(user.tags);
    });
    userList.value = resDate;
  }
});
</script>
  
  <style>
</style>