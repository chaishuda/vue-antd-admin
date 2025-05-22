<template>
    <a-layout-content :style="contentStyle">
        <router-view v-slot="{ Component, route }">
            <transition :name="(route.meta.transition as string) || 'fade-transform'" mode="out-in">
                <div class="content-container">
                    <keep-alive v-if="keepAliveComponentsName" :include="keepAliveComponentsName">
                        <component :is="Component" :key="route.fullPath" />
                    </keep-alive>
                    <component v-else :is="Component" :key="route.fullPath" />
                </div>
            </transition>
        </router-view>
    </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CSSProperties } from "vue";

const keepAliveComponentsName = ref<string[]>([]);

const contentStyle: CSSProperties = {
    backgroundColor: "#f5f5f5",
    maxHeight: "calc(100vh - 64px)",
    overflowY: "auto",
    padding: "16px",
};
</script>

<style lang="scss" scoped></style>