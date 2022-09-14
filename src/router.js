import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "main",
    component: () => import("@/pages/home.vue"),
    // meta: { isAdminPage: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
