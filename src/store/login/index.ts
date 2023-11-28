import { defineStore } from 'pinia'

import {
  accountLoginRequest,
  accountUserInFoRequest,
  AccountRoleMenuRequest
} from '@/service/login/index'
import type { accountType } from '@/service/login/type'

import router from '@/router/index'

import localCache from '@/utils/cache'

export const useLogin = defineStore('login', {
  //这里一定要将第一个属性写上，就是这个store的名字，不然的话this获取不到state
  state: () => ({
    id: 0,
    name: '',
    token: '',
    userInFo: {} as any,
    userMenu: {} as any
  }),
  getters: {},
  actions: {
    async accountLogin(account: accountType) {
      const accountRes = await accountLoginRequest(account)
      const { id, name, token } = accountRes.data

      localCache.setCache('token', token)
      localCache.setCache('name', name)

      this.id = id
      this.name = name
      this.token = token
      //获取用户信息以及角色id
      const userInfoRes = await accountUserInFoRequest(id)
      console.log(userInfoRes)
      localCache.setCache('userInfo', userInfoRes.data)
      this.userInFo = userInfoRes.data
      //通过角色id获取角色列表
      const userMenuRes = await AccountRoleMenuRequest(this.userInFo.role?.id)
      console.log(userMenuRes)
      localCache.setCache('userMenu', userMenuRes.data)
      this.userMenu = userMenuRes.data
      router.push('/main')
    },
    getCacheData() {
      //这个是读取cacheWiley不进行刷新空白页bug，设置cache还是要在上面获取了数据就放发哦cache中。
      const token = localCache.getCache('token')
      if (token) {
        this.token = token
      }
      const name = localCache.getCache('name')
      if (name) {
        this.name = name
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        this.userInFo = userInfo
      }
      const userMenu = localCache.getCache('userMenu')
      if (userMenu) {
        this.userMenu = userMenu
      }
    }
  }
})
