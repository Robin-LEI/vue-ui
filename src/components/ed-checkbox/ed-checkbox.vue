<template>
  <el-checkbox class="ed-checkbox" v-bind="$attrs" v-on="$listeners"><slot></slot></el-checkbox>
</template>

<script>
export default {
  name: "EdCheckbox"
}
</script>
