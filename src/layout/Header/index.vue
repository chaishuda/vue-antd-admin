<template>
    <a-layout-header :style="headerStyle">
        <HeaderRight />
    </a-layout-header>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import HeaderRight from './components/HeaderRight.vue'

const headerStyle: CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0,21,41,.08)",
};
</script>

<style lang="scss" scoped>
.header-right {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>