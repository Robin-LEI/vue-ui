<template>
  <el-form v-bind="$attrs" v-on="$listeners" class="ed-form">
    <slot></slot>
  </el-form>
</template>

<script>
  export default {
    name: "EdForm"
  }
</script>
