<template>
  <div class="page-table">
    <content-table v-bind="contentTableConfig" :pageName="pageName">
      <template #status="scope">
        <el-button :type="scope.row.enable === 1 ? 'success' : 'danger'">{{
          scope.row.enable
        }}</el-button>
      </template>
    </content-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import contentTable from '@/base-ui/content-table/index'

import { useSystem } from '@/store/index'
export default defineComponent({
  name: 'page-table',
  components: {
    contentTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const useSystemStore = useSystem()
    const getData = function () {
      useSystemStore.getuserData({
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
    getData()
    return {}
  }
})
</script>

<style scoped lang="less">
.page-table {
  margin-top: 15px;
  border-top: 2px solid #eee;
  padding: 10px 10px;
  background-color: #eee;
}
</style>
