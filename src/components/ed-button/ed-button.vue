<template>
  <el-button 
    @click="handleClick"
    :type="type"
    :icon="icon" 
    :disabled="disabled"
    :autofocus="autofocus"
    :plain="plain"
    :round="round"
    :circle="circle"
    :size="size"
    :loading="loading"
    :class="['ed-button',{'no-bg': nobg}, {'is-login': islogin}]"
    >
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'EdButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean,
      nobg: Boolean,
      islogin: Boolean
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>

<style lang='scss' scoped>
$primary: #2777FF;
.ed-button {
    min-width: 88px !important;
    height: 34px !important;
    padding: 0 10px !important;
    margin: 0;
    color: #ffffff !important;
    font-size: 14px !important;
    background: $primary !important;
    border: 1px solid $primary !important;
    border-radius: 4px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    .svg-icon {
      font-size: 14px !important;
      margin-right: 4px !important;
    }
    &:hover {
      &.is-disabled {
        opacity: 0.5;
      }
    }
    &.is-disabled {
      background: rgba(39, 119, 255, 0.5) !important;
      border: 1px solid rgba(39, 119, 255, 0.2) !important;
      &:hover {
        background: rgba(39, 119, 255, 0.5) !important;
      }
    }
    i {
      margin-right: 4px;
    }
    span {
      margin: 0 !important;
    }
    &.no-bg {
      background: none !important;
      color: $primary !important;
      &.is-disabled {
        border: 1px solid rgba(39, 119, 255, 0.2) !important;
        color: rgba(39, 119, 255, 0.5) !important;
        &:hover {
          color: rgba(39, 119, 255, 0.5) !important;
        }
      }
      &:hover {
        background: none !important;
        color: $primary !important;
      }
    }
    &.is-login {
      width:360px;
      height:50px !important;
      background:rgba(39,119,255,1);
      box-shadow:0px 5px 10px -3px rgba(12,47,105,1);
      border-radius:10px;
      font-size: 20px;
      font-weight: bold;
      color:rgba(225,249,254,1);
    }
    //小号button
    &.el-button--small {
      height: 30px !important;
    }
  }

</style>
