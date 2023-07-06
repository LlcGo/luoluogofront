
<template>
   <template v-if="user">
  <van-cell title="昵称" is-link to="/user/edit" :value="user.userName" @click="goEdite('userName','用户名',user.userName)"/>
<van-cell title="账号" is-link :value="user.userAccount" @click="goEdite('userAccount','账号',user.userAccount)"/>
<van-cell title="头像" is-link to="/user/edit">
 <img style="height: 48px" :src="user.avatarUrl"/>
</van-cell>
<van-cell title="性别" is-link to="/user/edit"  :value="user.gender" @click="goEdite('gender','性别',user.gender)"/>
<van-cell title="电话" is-link to="/user/edit"  :value="user.phone" @click="goEdite('phone','手机',user.phone)"/>
<van-cell title="邮箱" is-link to="/user/edit"  :value="user.email" @click="goEdite('email','邮箱',user.email)"/>
<van-cell title="用户编号"   :value="user.plantCode" />
<van-cell title="注册时间"  :value="user.createTime" />
   </template>
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