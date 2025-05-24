<template>
    <div class="header-right">
        <a-space>
            <a-avatar :size="32" shape="circle"
                :src="userInfo?.avatar || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'" />

            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                    Hover me
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <UserOutlined />
                            个人中心
                        </a-menu-item>
                        <a-menu-item>
                            <SettingOutlined />
                            系统设置
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item>
                            <LogoutOutlined />
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <a-button type="text" @click="handleExpand">
                <ExpandOutlined v-if="!isFullscreen" />
                <CompressOutlined v-else />
            </a-button>
        </a-space>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { UserOutlined, LogoutOutlined, SettingOutlined, ExpandOutlined, CompressOutlined } from '@ant-design/icons-vue';
import useStore from '@/store'
import { message } from 'ant-design-vue';

const { user } = useStore()
const userInfo = computed(() => user.getUserInfo)

const isFullscreen = ref(false)
// 全屏查看
const handleExpand = () => {
    try {
        isFullscreen.value = !isFullscreen.value
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            document.documentElement.requestFullscreen()
        }
    } catch (error) {
        message.error('您的浏览器不支持全屏功能')
    }
}
</script>

<style lang="scss" scoped>
.header-right {
    display: flex;
    align-items: center;
}
</style>