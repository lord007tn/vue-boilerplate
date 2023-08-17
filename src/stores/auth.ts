import { defineStore } from 'pinia'
import api from '@/services/api'
import { router } from '@/router'

type LoginBody = {
  UserName: string
  password: string
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => ({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    error: null as Error | null,
    message: null as string | null
  }),
  getters: {
    getIsAuthenticated(state): boolean {
      return state.isAuthenticated
    }
  },
  actions: {
    async hydrate() {},
    async dehydrate() {
      this.$reset()
    },
    async authCheck() {},

    async login(data: LoginBody) {},
    logout() {
      this.isLoading = true
      delete api.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
      this.token = ''
      this.isAuthenticated = false
      this.isLoading = false
      router.replace({ name: 'login' })
    }
  }
})
