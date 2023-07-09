<template>
  <div>
    <van-search v-model="search" @search="onSearch" placeholder="请输入搜索关键词" />
    <van-tabs v-model:active="active" @change="onClickTab">
      <van-tab title="公开" name="public"/>
      <van-tab title="私有" name="private"/>
    </van-tabs>
    <van-button class="add-button" icon="plus" type="primary" @click="addTeam"></van-button>
    <team-card-list :team-list="TeamList">
    </team-card-list>
    <van-empty v-if="TeamList?.length < 1" image-size="10rem" description="数据为空" />
  </div>

</template>

<script setup>
import {useRouter} from "vue-router"
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugin/myAxios.js";
import {showFailToast, showSuccessToast, showToast} from "vant";
 const router = useRouter();
 const TeamList = ref([]);
 const search = ref('');
 const active = ref('public')

 const onClickTab = (name) =>{
   console.log('name = ' + name.value)
   if(name === 'public'){
     getList()
   }else{
     getList('',2)
   }

 }
 const getList = async (search='', status = 0) => {
   const res = await myAxios.get('/list',{
     params:{
       searText:search,
       teamStatus: status
     }
   })
   if(res?.code === 0 && res.date){
     TeamList.value = res.date
   }else {
     showFailToast('获取数据失败,请刷新重试')
   }
 }

 onMounted(async ()=>{
   getList()
 })

const onSearch = (val) => {
  getList(val)
};

 const addTeam = () => {
     router.push({
       path:"/team/add"
     })
 }
</script>

<style scoped>


</style>
