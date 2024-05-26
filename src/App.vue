<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">header</a-layout-header>
    <a-layout-content class="layout-content">
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .layout {
    min-height: 100%;
  }
</style>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;

  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}
</style>
