import { defineStore } from 'pinia'

import { getPageListData } from '@/service/main/sysstem/index'
import type { reqDataType } from './type/systemType'
export const useSystem = defineStore('system', {
  state: () => ({
    userList: {} as any,
    userCount: 0
  }),
  actions: {
    async getuserData(reqInfo: reqDataType) {
      let queryUrl = ''
      const reqpageName = reqInfo.pageName
      switch (reqpageName) {
        case 'users':
          queryUrl = '/users/list'
          break
      }

      const res = await getPageListData(queryUrl, reqInfo.queryInfo)

      const resData = res.data.list
      const resCount = res.data.totalCount
      switch (reqpageName) {
        case 'users':
          this.userList = resData
          this.userCount = resCount
          break
      }
    }
  }
})
