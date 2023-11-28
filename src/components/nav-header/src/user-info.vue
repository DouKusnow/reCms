<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ useLoginStore.name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item @click="handelExit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useLogin } from '@/store/login'

import localCache from '@/utils/cache'

import router from '@/router/index'
export default defineComponent({
  name: 'user-info',
  setup() {
    const useLoginStore = useLogin()

    const handelExit = function () {
      localCache.removeCache('token')
      router.push('/main')
      router.go(0)
    }
    return {
      useLoginStore,
      handelExit
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  margin-top: 20px;
}
</style>
