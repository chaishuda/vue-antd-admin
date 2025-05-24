import { defineStore } from 'pinia'

interface State {
    isCollapse: boolean // 是否折叠左侧菜单
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        isCollapse: false
    }),
    getters: {
        getIsCollapse: (state) => state.isCollapse
    },
    actions: {
        setIsCollapse(isCollapse: boolean) {
            this.isCollapse = isCollapse
        }
    }
})
