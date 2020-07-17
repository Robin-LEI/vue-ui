<template>
  <el-dropdown class="ed-dropdown" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
    <slot name="dropdown"></slot>
  </el-dropdown>
</template>

<script>
export default {
  name: "EdDropdown",
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.el-dropdown-menu {
  
}
</style>
