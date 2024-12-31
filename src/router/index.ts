import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
import { RouteNameEnum } from "./routes.enum";
const routes = [
  {
    path: "/",
    redirect: { name: RouteNameEnum.dashboard },
  },
  {
    path: "/dashboard",
    name: RouteNameEnum.dashboard,
    component: Dashboard,
  },
  {
    path: "/settings",
    name: RouteNameEnum.settings,
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
