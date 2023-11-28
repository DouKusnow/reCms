<template>
  <div class="nav-header">
    <span class="icon" @click="isCollapse">
      <template v-if="isIcon === true">
        <el-icon size="35px"><Expand /></el-icon>
      </template>
      <template v-else-if="isIcon === false">
        <el-icon size="35px"><Fold /></el-icon>
      </template>
    </span>
    <div class="center">
      <bread-crumd></bread-crumd>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import breadCrumd from './bread-crumd.vue'
import userInfo from './user-info.vue'
export default defineComponent({
  name: 'nav-header',
  emit: ['isChange'],
  components: {
    breadCrumd,
    userInfo
  },
  setup(props, { emit }) {
    const isIcon = ref(false)
    const isCollapse = function () {
      isIcon.value = !isIcon.value

      emit('isChange', isIcon.value)
    }
    return {
      isIcon,
      isCollapse
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  // width: 100%;
  display: flex;

  .icon {
    display: inline-block;

    // border: 2px solid red;
    margin-left: -18px;
    height: 100%;
    line-height: 70px;
    // background-color: red;s
  }
  .center {
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 0 25px;
    line-height: 60px;
  }
}
</style>
