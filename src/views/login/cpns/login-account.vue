<template>
  <div class="account">
    <el-form :model="accountMsg" :rules="accountRules" ref="formRef">
      <el-form-item label="用户名" label-width="70px" prop="username">
        <el-input v-model="accountMsg.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="70px" prop="password">
        <el-input v-model="accountMsg.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { accountRules } from '../config/login-rules'
import { useLogin } from '@/store/login/index'

//获取ElForm实例
import { ElForm } from 'element-plus'

//引入缓存组件
import localCache from '@/utils/cache'

export default defineComponent({
  name: 'login-account',
  setup() {
    const accountMsg = reactive({
      username: localCache.getCache('username') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const useLoginStore = useLogin()
    const formRef = ref<InstanceType<typeof ElForm>>()
    //通过ref获取到某一个实例的喊构造函数的类的话，同时要return出去并且在template模板中绑定ref属性

    const accountLogin = function (ischecked: boolean) {
      console.log(ischecked)
      formRef.value?.validate((valid) => {
        if (valid) {
          if (ischecked) {
            localCache.setCache('username', accountMsg.username)
            localCache.setCache('password', accountMsg.password)
          } else {
            localCache.removeCache('username')
            localCache.removeCache('password')
          }
          useLoginStore.accountLogin({ ...accountMsg })
        }
      })
    }
    return {
      accountMsg,
      accountRules,
      accountLogin,
      formRef
    }
  }
})
</script>

<style scoped lang="less">
.account {
  width: 100%;
  height: 100%;
}
</style>
