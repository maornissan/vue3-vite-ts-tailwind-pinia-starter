import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "App",
    component: App,
    children: [
      {
        path: "/",
        name: "MainPage",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/index.vue"),
      },
      // etc etc...
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
