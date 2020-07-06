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
    :class="['ed-button',{'no-bg': nobg}]"
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
      nobg: Boolean
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
    //小号button
    &.el-button--small {
      height: 30px !important;
    }
  }

</style>
