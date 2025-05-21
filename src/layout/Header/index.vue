<template>
    <a-layout-header :style="headerStyle">
    </a-layout-header>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

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
</style>