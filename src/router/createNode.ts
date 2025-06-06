// 1. 用于解决keep-alive需要name的问题，动态生成随机name供keep-alive使用
// 2. 用于解决transition动画内部结点只能为根元素的问题，单文件可写多结点
import { defineComponent, h, createVNode, ref, nextTick } from "vue";
import reload from "./reload.vue";
import NProgress from "@/utils/system/nprogress";

export function createNameComponent(component: {
  (): Promise<typeof import("*.vue")>;
  (): Promise<typeof import("*.vue")>;
  (): Promise<any>;
}) {
  return () => {
    // eslint-disable-next-line promise/param-names
    return new Promise((res) => {
      component().then((comm) => {
        const name = (comm.default.name || "vueAdminBox") + "$" + Date.now();
        const tempComm = defineComponent({
          name,
          setup() {
            const isReload = ref(false);
            let timeOut: ReturnType<typeof setTimeout> | null = null;
            const handleReload = () => {
              isReload.value = true;
              timeOut && clearTimeout(timeOut);
              NProgress.start();
              timeOut = setTimeout(() => {
                nextTick(() => {
                  NProgress.done();
                  isReload.value = false;
                });
              }, 260);
            };
            return {
              isReload,
              handleReload,
            };
          },
          render: function () {
            if (this.isReload) {
              return h("div", { class: "main-box" }, [h(reload)]);
            } else {
              return h("div", { class: "main-box" }, [
                createVNode(comm.default),
              ]);
            }
          },
        });
        res(tempComm);
      });
    });
  };
}
