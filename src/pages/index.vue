<template>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="isMode" />
    </template>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading">
  </user-card-list>
  <van-empty v-if="userList == null || userList.length < 1" image-size="10rem" description="数据为空" />
</template>

<script setup lang="ts">

import UserCardList from  '../components/UserCardList.vue'
import {ref, onMounted, watchEffect} from "vue";
import { useRoute } from "vue-router";
import myAxios from "../plugin/myAxios.js";

const route = useRoute();
//获取页面路由过来的数据
const { tags } = route.query;

const userList = ref([]);

const isMode = ref(false);

const loading = ref(true);

const loadingData = async() =>{
  loading.value = true;
  let resDate = []
  if(isMode.value){
    const num = 10
    resDate = await myAxios
        .get("/user/match", {
          params: {
            num
          }
        })
        .then(function(response) {
          // 处理成功情况
          console.log("/user/match", response.date);
          return response?.date;
        })
        .catch(function(error) {
          // 处理错误情况
          console.log(error);
        });
    console.log("/user/match getData", resDate);
    if (resDate) {
      resDate.forEach(user => {
        user.tags = JSON.parse(user.tags);
      });
      userList.value = resDate;
    }
  }else{
    resDate =  await myAxios
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
  }
  loading.value = false;
}

watchEffect(()=>{
  loadingData();
})


onMounted(async () => {

});




</script>

  <style>
</style>
