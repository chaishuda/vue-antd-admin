<template>
    <a-menu type="primary" mode="inline" :inlineCollapsed="collapsed" :items="items" :selectedKeys="selectedKeys"
        :openKeys="openKeys" @click="handleClick">
    </a-menu>
</template>

<script setup lang="ts">
import { ref, computed, h } from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    menuItems: {
        type: Array,
        default: () => []
    },
    collapsed: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();
const route = useRoute();

const items = computed(() => {
    return props.menuItems.map(route => ({
        ...route,
        icon: () => h(route?.icon || '')
    }));
});

const collapsed = computed(() => {
    return props.collapsed;
});

// 获取当前选中的菜单项
const selectedKeys = computed(() => {
    const currentPath = route.path;
    // 如果是根路径或 dashboard 路径，返回 dashboard 路径
    if (currentPath === '/' || currentPath === '/dashboard') {
        return ['/dashboard'];
    }
    return [currentPath];
});

// 获取当前展开的菜单项
const openKeys = computed(() => {
    const path = route.path === '/' ? '/dashboard' : route.path;
    const pathSegments = path.split('/').filter(Boolean);
    const keys: string[] = [];
    let currentPath = '';

    // 构建展开的菜单项路径
    pathSegments.forEach(segment => {
        currentPath += `/${segment}`;
        keys.push(currentPath);
    });

    return keys;
});

const handleClick: MenuProps['onClick'] = e => {
    router.push(e.key);
};
</script>

<style scoped lang="scss"></style>