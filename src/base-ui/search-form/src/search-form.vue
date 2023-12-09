<template>
  <div class="search-from">
    <el-form clsss="el-form" :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="24" v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValue($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" size="large">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  is-range
                  type="daterange"
                  :v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValue($event, item.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { searchFormItemType } from '../type/search-form-type'
export default defineComponent({
  name: 'search-form',
  props: {
    formItems: {
      type: [] as PropType<searchFormItemType[]>,
      default: () => ({})
    },
    modelValue: {
      type: Object,
      required: true
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    labelWidth: {
      type: String,
      default: '70px'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleValue = function (value: any, field: any) {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
      console.log(value)
    }
    return {
      handleValue
    }
  }
})
</script>

<style scoped lang="less">
.search-from {
  background-color: #eee;
  .el-form {
    padding-top: 20px;
  }
}
</style>
