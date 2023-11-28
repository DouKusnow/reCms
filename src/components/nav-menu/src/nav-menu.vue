<template>
  <div class="nav-menu">
    <div class="nav-menu-header">
      <span
        ><img
          src="@/assets/images/53b6be062760d copy.jpg"
          alt=""
          class="title-img"
      /></span>
      <span class="title-text" v-if="isChange === false">RE后台管理</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :collapse="isChange"
    >
      <template v-for="item in useLoginStore.userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <component
                v-if="item.icon"
                :is="item.icon.split('el-icon-')[1]"
                style="width: 16px; height: 16px"
              ></component>

              <span>{{ item.name }}</span>
            </template>
            <div v-for="sonItem in item.children" :key="sonItem.id">
              <el-menu-item :index="sonItem.id + ''">
                <component
                  v-if="item.icon"
                  :is="item.icon.split('el-icon-')[1]"
                  style="width: 16px; height: 16px"
                ></component>

                <span>{{ sonItem.name }}</span>
              </el-menu-item>
            </div>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <template #title>
              <component
                v-if="item.icon"
                :is="item.icon.split('el-icon-')[1]"
                style="width: 16px; height: 16px"
              ></component>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLogin } from '@/store/login/index'
export default defineComponent({
  name: 'nav-menu',
  props: {
    isChange: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const useLoginStore = useLogin()
    return {
      useLoginStore
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu-header {
  height: 70px;
  // background-color: rgb(3, 60, 112);
  line-height: 70px;

  .title-img {
    display: inline-block;
    margin-left: 20px;
    height: 30px;
    width: 30px;

    img {
      height: 100%;
      width: 100%;
      vertical-align: middle;
    }
  }
  .title-text {
    height: 100%;
    margin-left: 10px;
    line-height: 80px;
    // text-align: end;
  }
}
.el-menu-vertical-demo {
  --el-menu-border-color: none;
}
</style>
