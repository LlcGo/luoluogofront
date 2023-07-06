<template>
  <div>
    <van-search v-model="search" @search="onSearch" placeholder="请输入搜索关键词" />
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

 const getList = async (search='') => {
   const res = await myAxios.get('/list/join/team',{
     params:{
       searText:search
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
