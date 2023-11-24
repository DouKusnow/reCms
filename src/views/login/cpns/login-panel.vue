<template>
  <div class="panel">
    <el-tabs type="border-card" class="demo-tabs" stretch="true">
      <el-tab-pane label="账号登录"
        ><login-account ref="accountRef"></login-account
      ></el-tab-pane>
      <el-tab-pane label="密码登录"></el-tab-pane>
    </el-tabs>
    <div class="checkItem">
      <el-checkbox v-model="ischecked" label="记住密码" size="large" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginButton" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import loginAccount from '@/views/login/cpns/login-account.vue'
export default defineComponent({
  name: 'login-panel',
  components: {
    loginAccount
  },
  setup() {
    const ischecked = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const loginClick = function () {
      accountRef.value?.accountLogin(ischecked.value)
      console.log('点击了登录按钮')
    }
    return {
      ischecked,
      loginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.panel {
  margin-bottom: 294px;
  width: 350px;
  .checkItem {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    padding: 0 20px;
    background-color: #fff;
  }
  .loginButton {
    margin-top: 5px;
    width: 100%;
    height: 45px;
  }
}
</style>
