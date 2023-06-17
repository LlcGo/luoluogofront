<template>
  <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索标签"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-divider content-position="left">已选标签
</van-divider>
<van-tag :show="show" closeable size="medium" type="primary" @close="close">
  标签
</van-tag>
<van-divider content-position="left">选择标签
</van-divider>
<van-tag :show="show" closeable size="medium" type="primary" @close="close">
  标签
</van-tag>

</template>

<script setup>

import { ref } from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter();
const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => router.push('/');


</script>

<style>

</style>