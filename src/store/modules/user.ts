import { defineStore } from "pinia";

interface State {
    userInfo: object | null
    token: string | null
}

export const useUser = defineStore('user', {
    state: (): State => ({
        userInfo: null,
        token: null,
    }),
    getters: {
        getUserInfo: (state) => state.userInfo,
        getToken: (state) => state.token,
    },
    actions: {
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo
        },
        setToken(token: string) {
            this.token = token
        },
        removeUserInfo() {
            this.userInfo = null
        },
        removeToken() {
            this.token = null
        },
        removeAll() {
            this.userInfo = null
            this.token = null
        }
    }
})
