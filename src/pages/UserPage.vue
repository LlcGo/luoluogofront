
<template>
  <van-cell title="用户信息" is-link to="/user/update" :value="user?.userName"/>
  <van-cell title="我创建的队伍" is-link to="/team/my/create" />
  <van-cell title="我加入的队伍" is-link to="/team/my/join" />
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {onMounted,ref} from 'vue'
// import myAxios from '../plugin/myAxios'
import getCurrentUser from '../server/user'
import { showSuccessToast, showFailToast } from 'vant';


const router = useRouter();
const user = ref()

onMounted( async()=>{
   const result = await getCurrentUser();
   console.log('get',result)
   if(result.code === 0){
    user.value = result.date
    showSuccessToast('成功');
   }else{
    showFailToast('失败');
   }
})

const goEdite =(editKey: String, title:String, currentValue: String) => {
  router.push({
    path:'/user/edit',
    query:{
        editKey,
        currentValue,
        title,
    }
  })
}
</script>

<style>

</style>
