<template>
  <a-layout-header class="header">
    <div class="header-wrapper">
      <div class="left-content">
        <div class="logo-title" @click="() => router.push('/')">
          <img draggable="false" class="logo" src="@/assets/logo.png" alt="" />
          <img
            draggable="false"
            class="title"
            src="@/assets/you-doge-meeting.png"
            alt="有柴会议"
          />
        </div>
        <a-menu mode="horizontal" @menu-item-click="handleMenuItemClick" :selected-keys="[]">
          <a-menu-item key="home"> 首页 </a-menu-item>
        </a-menu>
      </div>

      <div class="right-content"></div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleMenuItemClick = (key: string) => {
  console.log(key);
  if (key === "0") {
    router.push("/");
  }
};
</script>

<style scoped lang="less">
.header {
  height: 64px;
  background-color: #fff;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 8px #d1d1d1;

  .header-wrapper {
    width: 100%;
    max-width: 1300px;
    margin: auto;
  }

  .left-content {
    display: flex;
    align-items: center;
    .logo-title {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;

      .logo {
        width: 40px;
        height: 40px;
      }
      .title {
        margin-left: 10px;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
