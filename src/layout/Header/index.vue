<template>
    <a-layout-header :style="headerStyle">
        <HeaderLeft />
        <HeaderRight />
    </a-layout-header>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import { ref } from 'vue';
import HeaderRight from './components/HeaderRight.vue'
import HeaderLeft from './components/HeaderLeft.vue'

const headerStyle: CSSProperties = {
    color: "#fff",
    height: 64,
    paddingInline: '16px',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    lineHeight: "64px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0,21,41,.08)",
};

</script>

<style lang="scss" scoped></style>