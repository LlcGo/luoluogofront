
<template>
<div>
  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
        v-model="addTeam.teamName"
        name="teamName"
        label="队伍名"
        placeholder="请输入队伍名称"
        :rules="[{ required: true, message: '请填写队伍名称' }]"
    />

    <van-field
          v-model="addTeam.description"
          rows="1"
          autosize
          label="队伍简介"
          type="textarea"
          placeholder="请输入队伍简介"
      />


    <van-field
        v-model="addTeam.expireTime"
        is-link
        readonly
        name="expireTime"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" :min-date="mindate" />
    </van-popup>

    <van-field name="stepper" label="最大人数">
      <template #input>
        <van-stepper v-model="addTeam.maxNum" max="10" min="3" />
      </template>
    </van-field>


    <van-field name="radio" label="选择状态">
      <template #input>
        <van-radio-group v-model="addTeam.teamStatus" direction="horizontal">
          <van-radio name="0">公开</van-radio>
          <van-radio name="1">私密</van-radio>
          <van-radio name="2">加密</van-radio>
        </van-radio-group>
      </template>
    </van-field>

    <van-field
        v-if="Number(addTeam.teamStatus) === 2"
        v-model="addTeam.teamPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</div>
</template>

<script setup >
import {ref} from "vue";
import myAxios from "../plugin/myAxios.js";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router"
const router = useRouter();

const initData = {
    "teamName": "",
    "description": "",
    "expireTime": null,
    "maxNum": 0,
    "teamPassword": "",
    "teamStatus": 0,
    "userId": 0
}

const mindate = new Date();
const addTeam = ref({...initData})
const showPicker = ref(false);
const onConfirm = ({selectedValues}) => {
  addTeam.value.expireTime = selectedValues.join("/")
  showPicker.value = false;
};

const onSubmit = async () =>{
  const  postDate = {
    ...addTeam.value,
    teamStatus: Number(addTeam.value.teamStatus)
  }

  const result = await myAxios.post('/add',postDate)
  if(result?.code === 0 && result.date){
    showSuccessToast('创建队伍成功')
    router.push({
      path:'/team',
      replace:true
    })
  }else {
    showFailToast('创建队伍失败')
  }
}
</script>

<style scoped>

</style>
