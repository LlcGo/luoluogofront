<template>
  <form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索标签"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-divider  content-position="left">已选标签</van-divider>
<div v-if="activeIds.length === 0">请选择标签</div>

<van-row gutter="16">
  <van-col  v-for="tag in activeIds" >
    <van-tag closeable size="small" type="primary" @close="close(tag)">
       {{ tag }}
    </van-tag>
  </van-col>
</van-row>

<van-divider content-position="left">选择标签</van-divider>
<van-tree-select
  v-model:active-id="activeIds"
  v-model:main-active-index="activeIndex"
  :items="tagsList"
/>
<div style="padding:12px">
  <van-button type="primary" block @click="toSearch">搜索</van-button>
</div>

</template>

<script setup>

import { ref } from 'vue';
import {useRouter} from 'vue-router'

let init =[
      {
        text: '性别',
        children: [
          { text: '男', id: '男' },
          { text: '女', id: '女' },
        ],
      },
      {
        text: '爱好',
        children: [
          { text: 'java', id: 'java' },
          { text: 'python', id: 'python' },
          { text: 'c++', id: 'c++' },
        ],
      },
    ];


const router = useRouter();
const searchText = ref('');
const onSearch = (val) => {
 tagsList.value = init.map(element => {
          const tempChilderen = [...element.children]
          const tempParenTage = {...element}
          tempParenTage.children = tempChilderen.filter(item => item.text.includes(searchText.value))
          return tempParenTage;
 });
};
const onCancel = () => {
  searchText.value = '';
  tagsList.value = init
};
//标签选择
const activeIds = ref([]);
const activeIndex = ref(0);
//标签
const tagsList = ref(init)

//删除标签
const  close= (tag) =>{
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
    })
}

const toSearch = () =>{
  console.log('toseach',activeIds.value)
   router.push({
    path:'/user/searchResultPage',
    query:{
      tags: activeIds.value,
    }
   })
}

</script>

<style>

</style>