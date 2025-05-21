import layout from "@/layout/index.vue";
import { createNameComponent } from "./createNode.ts";
export default [
  {
    path: "/",
    name: "layout",
    component: layout,
    meta: { title: "首页", noRole: true },
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "首页", noRole: true, hidden: true },
        component: createNameComponent(() => import("@/views/dashboard.vue")),
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: layout,
    meta: { title: "系统管理", noRole: true },
    children: [
      {
        path: "401",
        name: "401",
        component: createNameComponent(() => import("@/views/system/401.vue")),
        meta: { title: "401", noRole: true },
      },
      {
        path: "404",
        name: "404",
        component: createNameComponent(() => import("@/views/system/404.vue")),
        meta: { title: "404", noRole: true },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: createNameComponent(() => import("@/views/system/404.vue")),
    meta: { title: "404", noRole: true, hidden: true },
  },
];
