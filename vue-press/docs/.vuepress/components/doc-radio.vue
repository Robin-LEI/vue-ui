<template>
  <div class="">
    <ed-radio v-model="radio" label="1">备选项1</ed-radio>
    <ed-radio v-model="radio" label="2">备选项2</ed-radio>
    <h2>单选框组</h2>
    <el-radio-group v-model="radio2">
      <ed-radio :label="3">备选项3</ed-radio>
      <ed-radio :label="6">备选项6</ed-radio>
      <ed-radio :label="9">备选项9</ed-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio2: 6
    }
  }
}
</script>
