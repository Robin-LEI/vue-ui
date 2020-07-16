<template>
  <div class="">
    <ed-checkbox v-model="checked">备选项</ed-checkbox>
    <h2>复选框组</h2>
    <el-checkbox-group v-model="checkList">
      <ed-checkbox label="复选框 A"></ed-checkbox>
      <ed-checkbox label="复选框 B"></ed-checkbox>
      <ed-checkbox label="复选框 C"></ed-checkbox>
      <ed-checkbox label="禁用" disabled></ed-checkbox>
      <ed-checkbox label="选中且禁用" disabled></ed-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkList: ['选中且禁用','复选框 A']
    }
  }
}
</script>
