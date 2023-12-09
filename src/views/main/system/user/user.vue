<template>
  <div class="user">
    <page-form :searchFormConfig="searchFormConfig"></page-form>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageForm from '@/components/page-form/index'
import pageContent from '@/components/page-table/index'

import { searchFormConfig } from './config/search-form.config'
import { contentTableConfig } from './config/table-content.config'

export default defineComponent({
  name: 'user-page',
  components: {
    pageForm,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
