<template>
  <el-popover v-bind="$attrs" v-on="$listeners" width="200" placement="bottom" popper-class="ed_popover" trigger="hover">
    <el-button class="ed_popover_btn" slot="reference"><slot></slot></el-button>
  </el-popover>
</template>

<script>
export default {
  name: "EdPopover"
}
</script>

<style scoped lang="scss">
.ed_popover_btn {
  padding: 0px;
  border: none;
  color: #333;
}
.ed_popover_btn:focus, .ed_popover_btn:hover {
  background: transparent;
  color: #333;
}
</style>
