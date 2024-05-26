<template>
  <a-layout class="layout">
    <Header v-if="layoutStatus.useHeader"/>
    <a-layout-content class="layout-content">
      <RouterView />
    </a-layout-content>
    <a-layout-footer class="layout-footer" v-if="layoutStatus.useFooter"><Footer /></a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';


const layoutStatus = reactive({
  useHeader: true,
  useFooter: true,
});

const router = useRouter();

watch(
  router.currentRoute,
  (route) => {
    const { useHeader, useFooter } = route.meta;
    layoutStatus.useHeader = typeof useHeader === "boolean" ? useHeader : true;
    layoutStatus.useFooter = typeof useFooter === "boolean" ? useFooter : true;
  },
  { immediate: true }
);

defineExpose({
  layoutStatus,
  router,
});
</script>

<style scoped lang="less">
.layout {
  min-height: 100%;
}
</style>
