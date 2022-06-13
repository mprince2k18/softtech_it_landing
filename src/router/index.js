import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MaildollView from "../views/MaildollView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/automatefood",
    name: "automatefood",
    component: MaildollView,
  },
  {
    path: "/automatemail",
    name: "automatemail",
    component: MaildollView,
  },
  {
    path: "/courselms",
    name: "courselms",
    component: MaildollView,
  },
  {
    path: "/khadyo",
    name: "khadyo",
    component: MaildollView,
  },
  {
    path: "/maildoll",
    name: "maildoll",
    component: MaildollView,
  },
  {
    path: "/manyvendor",
    name: "manyvendor",
    component: MaildollView,
  },
  {
    path: "/samuraipos",
    name: "samuraipos",
    component: MaildollView,
  },
];

const router = createRouter({
  mode: 'history',
  hash: false,
  history: createWebHistory(),
  routes,
});

export default router;
