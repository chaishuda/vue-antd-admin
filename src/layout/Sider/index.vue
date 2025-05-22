<template>
    <a-layout-sider :style="siderStyle" :width="sideWitdh" v-model:collapsed="state.collapsed">
        <div id="logo"><a href="/">Logo</a></div>
        <Menu :menuItems="menuItems" :collapsed="state.collapsed" />
    </a-layout-sider>
</template>

<script setup lang="ts">
import { reactive, h, computed } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue';
import Menu from '../Menu/index.vue';
import type { CSSProperties } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
    sideWidth: {
        type: Number,
        default: 256
    },
});

const router = useRouter();

const sideWitdh = computed(() => {
    return props.sideWidth;
})

const siderStyle: CSSProperties = {
    textAlign: "left",
    lineHeight: "120px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)",
};

const state = reactive({
    collapsed: false,
});
const menuItems = computed(() => {
    return getMenuItems([...router.options.routes])
})

// 获取菜单项
function getMenuItems(routes: any[], parentPath: string = '') {
    return routes.map(route => {
        if (route.meta?.hidden) return;

        // 处理路径，确保路径格式正确
        let currentPath = route.path;
        if (parentPath) {
            // 如果父路径是根路径，直接拼接子路径
            if (parentPath === '/') {
                currentPath = `/${route.path}`;
            } else {
                currentPath = `${parentPath}/${route.path}`;
            }
        }
        currentPath = currentPath.replace(/\/+/g, '/');

        const menuItem = {
            key: currentPath,
            icon: () => h(HomeOutlined),
            label: route.meta?.title || route.name,
        };

        // 如果有子路由，递归处理
        if (route.children && route.children.length > 0) {
            const children = getMenuItems(route.children, currentPath);
            // 只有当子菜单项不为空时才添加 children 属性
            if (children && children.length > 0) {
                (menuItem as any).children = children;
            }
        }

        // 处理 redirect 属性
        if (route.redirect) {
            // 如果 redirect 是相对路径，需要拼接父路径
            const redirectPath = route.redirect.startsWith('/')
                ? route.redirect
                : `${currentPath}/${route.redirect}`.replace(/\/+/g, '/');
            menuItem.key = redirectPath;
        }

        return menuItem;
    }).filter(item => item);
}

</script>

<style scoped lang="scss">
#logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #f0f0f0;

    a {
        color: #333;
    }
}

.ant-layout-sider-trigger {
    background-color: #fff;
    color: #333;
}
</style>