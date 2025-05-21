<template>
    <a-empty :image="image" :description="description" :image-style="imageStyle">
        <template #description>
            <span>
                {{ description }}
            </span>
        </template>
        <a-button type="primary" @click="handleClick">返回首页</a-button>
    </a-empty>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
    image: {
        type: String,
        default: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
    },
    description: {
        type: String,
        default: '暂无数据'
    },
    imageStyle: {
        type: Object,
        default: () => ({
            width: '200px',
            height: '200px',
            margin: '0 auto'
        })
    }
})

const handleClick = () => {
    router.push('/')
}

</script>

<style scoped></style>