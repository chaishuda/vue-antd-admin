<template>
    <a-empty :image="imageUrl" :description="description" :image-style="imageStyle">
        <template #description>
            <span>
                {{ description }}
            </span>
        </template>
        <a-button type="primary" @click="handleClick" v-if="showButton">返回首页</a-button>
    </a-empty>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 组件属性定义
const props = defineProps({
    // 空状态图片URL
    image: {
        type: String,
        default: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
    },
    // 空状态描述文本
    description: {
        type: String,
        default: '暂无数据'
    },
    // 图片样式配置
    imageStyle: {
        type: Object,
        default: () => ({
            width: '200px',
            height: '200px',
            margin: '50px auto'
        })
    },
    // 是否显示返回首页按钮
    showButton: {
        type: Boolean,
        default: true
    }
})

// 计算属性：获取图片URL
const imageUrl = computed(() => {
    return props.image
})

// 计算属性：获取描述文本
const description = computed(() => {
    return props.description
})

// 计算属性：获取图片样式
const imageStyle = computed(() => {
    return props.imageStyle
})

// 处理返回首页按钮点击事件
const handleClick = () => {
    router.push('/')
}

</script>

<style scoped></style>