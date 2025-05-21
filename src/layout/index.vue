<template>
    <a-config-provider :theme="theme">
        <a-layout>
            <Sider :sideWidth="sideWidth" />
            <a-layout>
                <HeaderComponent :sideWidth="sideWidth" />
                <Content />
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>
<script setup lang="ts">
import Sider from "./Sider/index.vue";
import HeaderComponent from "./Header/index.vue";
import Content from "./Content/index.vue";
import { ref, computed } from "vue";

const theme = {
    token: {
        colorPrimary: "#2775b6",
    },
};

const sideWidth = ref(256);

</script>
<style lang="scss" scoped></style>
