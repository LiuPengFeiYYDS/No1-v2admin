/**
 * @author YangLing
 * @date 2022/7/11 14:13
 */
import { login } from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await login(loginForm)
      commit('setToken', token)
      return token
    }
  }
}
