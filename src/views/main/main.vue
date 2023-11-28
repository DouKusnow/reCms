<template>
  <div class="main">
    <el-container class="contener">
      <el-aside class="left" :width="isChangeOne ? '50px' : '250px'"
        ><nav-menu :isChange="isChangeOne"></nav-menu
      ></el-aside>
      <el-container class="right-header">
        <el-header class="header"
          ><nav-header @isChange="hasChange"></nav-header
        ></el-header>
        <el-main>Main </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import navMenu from '@/components/nav-menu/index'
import navHeader from '@/components/nav-header/index'

export default defineComponent({
  name: 'user-main',
  components: {
    navHeader,
    navMenu
  },
  setup() {
    const isChangeOne = ref(false)
    const hasChange = function (value: boolean) {
      isChangeOne.value = value
    }
    return {
      isChangeOne,
      hasChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;
  .contener {
    height: 100%;
    .left {
      height: 100%;
      background-color: #545c64;
    }
    .header {
      background-color: #cccccc;
    }
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
