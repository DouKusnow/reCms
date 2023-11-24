<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import loginPanel from '@/views/login/cpns/login-panel.vue'
export default defineComponent({
  name: 'user-login',
  components: {
    loginPanel
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/m2cdn1.jpg');
  background-size: cover;
  background-position: center;
}
</style>
