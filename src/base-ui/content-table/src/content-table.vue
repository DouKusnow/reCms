<template>
  <div class="content-table">
    <el-table ref="multipleTableRef" style="width: 100%" :data="contentData">
      <template v-for="item in tableConfig" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useSystem } from '@/store/index'
export default defineComponent({
  name: 'content-table',
  props: {
    tableConfig: {
      type: Array as any,
      required: true
    },
    title: {
      type: String,
      default: 'aaaaaaa'
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const useSystemStore = useSystem()
    let contentData: any = ''
    switch (props.pageName) {
      case 'users':
        contentData = computed(() => useSystemStore.userList)
    }
    return {
      contentData
    }
  }
})
</script>

<style scoped lang="less">
.content-table {
  padding-top: 5px;
}
</style>
