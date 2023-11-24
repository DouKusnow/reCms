import { defineStore } from 'pinia'

import { accountLoginRequest } from '@/service/login/index'
import type { accountType } from '@/service/login/type'

import router from '@/router/index'

import localCache from '@/utils/cache'

export const useLogin = defineStore('login', {
  //这里一定要将第一个属性写上，就是这个store的名字，不然的话this获取不到state
  state: () => ({
    id: 0,
    name: '',
    token: ''
  }),
  getters: {},
  actions: {
    async accountLogin(account: accountType) {
      const accountRes = await accountLoginRequest(account)
      const { id, name, token } = accountRes.data

      localCache.setCache('token', token)
      this.id = id
      this.name = name
      this.token = token
      router.push('/main')
    },
    getCacheData() {
      const token = localCache.getCache('token')
      if (token) {
        this.token = token
      }
    }
  }
})
