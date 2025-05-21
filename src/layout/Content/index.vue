<template>
    <a-layout-content :style="contentStyle">
        <router-view v-slot="{ Component, route }">
            <transition :name="(route.meta.transition as string) || 'fade-transform'" mode="out-in">
                <keep-alive v-if="keepAliveComponentsName" :include="keepAliveComponentsName">
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
                <component v-else :is="Component" :key="route.fullPath" />
            </transition>
        </router-view>
    </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CSSProperties } from "vue";

const keepAliveComponentsName = ref<string[]>([]);

const contentStyle: CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    backgroundColor: "#f0f2f5",
    maxHeight: "calc(100vh - 64px)",
    overflowY: "auto",
};
</script>

<style lang="scss" scoped></style>