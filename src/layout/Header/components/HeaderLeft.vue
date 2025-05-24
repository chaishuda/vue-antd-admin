<template>
    <div class="header-left">
        <a-space>
            <a-button type="text" @click="handleCollapse">
                <MenuUnfoldOutlined v-if="isCollapse" />
                <MenuFoldOutlined v-else />
            </a-button>
        </a-space>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useStore from '@/store'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

const { app } = useStore()
const isCollapse = computed(() => app.getIsCollapse)

const handleCollapse = () => {
    app.setIsCollapse(!isCollapse.value)
}
</script>

<style scoped></style>