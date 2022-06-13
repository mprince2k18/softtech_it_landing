import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MaildollView from "../views/MaildollView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/maildoll",
    name: "maildoll",
    component: MaildollView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
