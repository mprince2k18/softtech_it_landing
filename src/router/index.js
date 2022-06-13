import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AutomateFoodView from "../views/AutomateFoodView.vue";
import AutomateMailView from "../views/AutomateMailView.vue";
import CourselmsView from "../views/CourselmsView.vue";
import KhadyoView from "../views/KhadyoView.vue";
import MaildollView from "../views/MaildollView.vue";
import ManyvendorView from "../views/ManyvendorView.vue";
import SamuraiposView from "../views/SamuraiposView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/automatefood",
    name: "automatefood",
    component: AutomateFoodView,
  },
  {
    path: "/automatemail",
    name: "automatemail",
    component: AutomateMailView,
  },
  {
    path: "/courselms",
    name: "courselms",
    component: CourselmsView,
  },
  {
    path: "/khadyo",
    name: "khadyo",
    component: KhadyoView,
  },
  {
    path: "/maildoll",
    name: "maildoll",
    component: MaildollView,
  },
  {
    path: "/manyvendor",
    name: "manyvendor",
    component: ManyvendorView,
  },
  {
    path: "/samuraipos",
    name: "samuraipos",
    component: SamuraiposView,
  },
];

const router = createRouter({
  mode: 'history',
  hash: false,
  history: createWebHistory(),
  routes,
});

export default router;
