import { createRouter, createWebHistory } from "vue-router";

import home from "@/pages/home.vue";

const routes = [
  {
    path: "/home",
    name: "homePage",
    component: home,
    meta: { isAdminPage: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
