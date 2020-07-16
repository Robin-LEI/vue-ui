<template>
  <el-radio class="ed-radio" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  name: "EdRadio",
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
// @import "../../styles/variable.scss";
// /*
//       radio
//     */
//     /deep/ .el-radio__inner{
//       width: 20px!important;
//       height: 20px!important;
//       background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(237,237,237,1) 100%);
//       border:1px solid rgba(151,151,151,1);
//     }
//     /deep/ .el-radio__input.is-checked + .el-radio__label, .el-checkbox__input.is-checked + .el-checkbox__label{
//       color: #333;
//     }
//     /deep/ .el-radio__label{
//       font-size:14px;
//       color: #999;
//     }
//     /deep/ .el-radio__input.is-checked .el-radio__inner{
//       background-color: #fff;
//       &:after{
//         width: 12px;
//         height: 12px;
//         border-radius: 12px;
//         background-color: $new-primary;
//       }
//     }
//     /deep/ .el-textarea__inner:focus{
//       border-color: $new-primary;
//     }
</style>
