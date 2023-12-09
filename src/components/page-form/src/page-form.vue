<template>
  <div class="page-form">
    <search-form v-bind="searchFormConfig" v-model="formData"></search-form>
    <div class="footer">
      <el-button
        ><el-icon><Refresh /></el-icon
        ><span class="btn-text">重置</span></el-button
      >
      <el-button type="primary"
        ><el-icon><Search /></el-icon
        ><span class="btn-text">提交</span></el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import searchForm from '@/base-ui/search-form/index'
export default defineComponent({
  name: 'page-form',
  components: {
    searchForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formSearchData = {} as any
    for (const item of formItems) {
      formSearchData[item.field] = ''
    }
    const formData = ref(formSearchData)
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.page-form {
  background-color: #eee;

  .footer {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    padding-right: 10px;
  }
}
</style>
