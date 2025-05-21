<template>
    <Empty :image="imageUrl" description="您访问的页面不存在" />
</template>

<script setup lang="ts">
import Empty from '@/components/empty/index.vue'
import imageUrl from '@/assets/images/404.svg'
</script>

<style scoped></style>