import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MaildollView from "../views/MaildollView.vue";
import KhadyoView from "../views/KhadyoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/demo/:software",
    name: "software",
    component: MaildollView,
  },
];

const router = createRouter({
  mode: "history",
  hash: false,
  history: createWebHistory(),
  routes,
});

export default router;
