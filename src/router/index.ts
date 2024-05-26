import { createWebHistory, createRouter } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import("@/views/Home/index.vue"),
    meta: {
      title: "首页"
    }
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASEURL),
  routes,
})