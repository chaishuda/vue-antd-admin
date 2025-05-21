<template>
    <Empty :image="imageUrl" description="您没有权限访问该页面" />
</template>

<script setup lang="ts">
import Empty from '@/components/empty/index.vue'
import imageUrl from '@/assets/images/401.svg'
</script>

<style scoped></style>