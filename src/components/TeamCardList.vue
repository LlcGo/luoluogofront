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
        <van-button  v-if="currentUser.date.id === Team.userId" size="small" type="primary" @click="deleteTeam(Team.teamId)" plain >解散队伍</van-button>
        <van-button size="small" v-if="currentUser.date.id !== Team.userId && Team.joinTeam" type="primary" @click="quitTeam(Team.teamId)">退出队伍</van-button>
        <van-button size="small" v-if="currentUser.date.id !== Team.userId && !Team.joinTeam" type="primary"  @click="preTeam(Team)">加入队伍</van-button>
      </template>
    </van-card>
  </div>
  <van-dialog v-model:show="show" title="标题"  @confirm="joinTeam"  @cancel="clearValue" show-cancel-button>
    <van-cell-group inset>
      <van-field v-model="password" placeholder="请输入密码" />
    </van-cell-group>
  </van-dialog>

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
const show = ref(false);
const password = ref();
const joinTeamId = ref();
const router = useRouter();

interface TeamListPorp{
    teamList: TeamType[];
}
const props =  withDefaults(defineProps<TeamListPorp>(),{
    teamList: [] as TeamType[],
})

const preTeam = (team:TeamType) =>{
  joinTeamId.value = team.teamId
  console.log('joinTeamId = ' + joinTeamId.value)
   if(team.teamStatus === 0 ){
     joinTeam()
   }else {
     show.value = true;
   }
}

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

const joinTeam = async () =>{
  if(!joinTeamId.value){
    return;
  }
   const  res = await myAxios.post('/join', {
     teamId: joinTeamId.value,
     teamPassword: password.value
   })
   if(res.code === 0){
     showSuccessToast('加入成功')
   }else {
     showFailToast('加入队伍失败' + (res.description ? `,${res.description}`:''))
   }
}

// 退出队伍
const quitTeam = async (teamId:number) =>{
  const  res = await myAxios.post('/quit', {
    teamId
  })
  if(res.code === 0){
    showSuccessToast('退出成功')
  }else {
    showFailToast('退出队伍失败' + (res.description ? `,${res.description}`:''))
  }
}

const deleteTeam = async (id:number) =>{
  const  res = await myAxios.post('/delete', {id})
  if(res.code === 0){
    showSuccessToast('解散成功')
  }else {
    showFailToast('解散队伍失败' + (res.description ? `,${res.description}`:''))
  }
}

const clearValue = () => {
  show.value = false;
  password.value= '' ;
  joinTeamId.value = null;
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
