<template>
  <div>
    <button @click="handleClickButton">点击请求</button>
    <div>成功：{{ resource1 }}</div>
    <div>失败：{{ resource2 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { getResource, postResource } from './api';
import { onMounted, ref } from 'vue';

const resource1 = ref<any>('');
const resource2 = ref<any>('');

const handleClickButton = async () => {
  const result1 = await getResource()
  resource1.value = result1

  const result2 = await postResource({})
  resource2.value = result2
}

</script>

<style lang="less" scoped></style>