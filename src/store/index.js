import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),
    actions: {
        // 尝试登录用户
        login(username, password) {
            if (username === '22002306' && password === '123456') {
                this.isAuthenticated = true;
                this.user = username;
                return true;
            }
            return false;
        },
        // 登出用户
        logout() {
            this.isAuthenticated = false;
            this.user = null;
        },
    },
});
