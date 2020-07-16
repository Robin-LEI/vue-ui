<template>
  <el-select v-bind="$attrs" v-on="$listeners" clearable class="ed-select">
    <slot></slot>
  </el-select>
</template>

<script>
export default {
  name: "EdSelect"
}
</script>
