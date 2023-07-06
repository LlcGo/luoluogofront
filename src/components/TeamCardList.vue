<template>
  <div id="teamPage">
    <van-card
        v-for="Team in props.teamList"
        :desc="Team.description"
        :title="Team.teamName"
        :thumb="teamjpg"
    >
      <template #tags>
        <van-tag plain type="primary"
                 style="margin:8px" >
          {{TeamStatusEnum[Team.teamStatus]}}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{'队伍人数最大: ' + Team.maxNum}}
        </div>
        <div>
          {{'队伍创建时间: ' + Team.createTime}}
        </div>
        <div>
          {{'队伍过期时间: '+ Team.expireTime}}
        </div>
      </template>
      <template #footer>
        <van-button  v-if="currentUser.date.id === Team.userId" size="small"  plain type="primary" @click="updateTeam(Team.teamId)">更新队伍</van-button>
        <van-button  v-if="currentUser.date.id === Team.userId" size="small" type="primary" @click="joinTeam(Team.teamId)" plain >解散队伍</van-button>
        <van-button size="small" type="primary" @click="updateTeam(Team.teamId)">退出队伍</van-button>
        <van-button size="small" type="primary" @click="joinTeam(Team.teamId)">加入队伍</van-button>
      </template>
    </van-card>
  </div>

</template>

<script setup lang="ts">
import TeamType from '../model/team'
import {TeamStatusEnum} from "../contant/TeamStatusEnum";
import teamjpg from '../assets/team.jpg'
import myAxios from "../plugin/myAxios.js";
import {showFailToast, showSuccessToast} from "vant";
import {onMounted, ref} from "vue";
import getCurrentUser from "../server/user";
import {useRouter} from "vue-router";


const  router = useRouter();
interface TeamListPorp{
    teamList: TeamType[];
}
const props =  withDefaults(defineProps<TeamListPorp>(),{
    teamList: [] as TeamType[],
})

const currentUser = ref({});
onMounted(async ()=>{
  currentUser.value = await getCurrentUser()
})

const updateTeam = (id:number) => {
  router.push({
    path: "/team/update",
    query:{
       id
    }
  })
}

const joinTeam = async (teamId:number) =>{
   const  res = await myAxios.post('/join', {teamId})
   if(res.data === 0){
     showSuccessToast('加入成功')
   }else {
     showFailToast('加入队伍失败' + (res.description ? `,${res.description}`:''))
   }
}
</script>


<style scoped>
#teamPage {
  :deep(.van-image__img){
    object-fit: unset;
    height: 128px;
  }

}
</style>
