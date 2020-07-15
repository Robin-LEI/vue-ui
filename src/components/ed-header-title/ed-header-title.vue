<template>
  <div :class="['ed-header-title', {'btn-height':$slots.rightContent&&isBtn?true:false}]">
    <h1>
      {{title}}
      <span v-if="$slots.icon" class="header-title-icon">
        <slot name="icon"></slot>
      </span>
    </h1>
    <slot name="rightContent"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      isBtn: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .ed-header-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    width: 100%;
    margin-bottom: 16px;
    h1{
      padding-left: 14px;
      font-size: 14px;
      font-weight: bold;
      color: #041039;
      position: relative;
      line-height: 20px;
      &:before{
        content: '';
        width: 4px;
        height:20px;
        background:rgba(39,119,255,1);
        position: absolute;
        left: 0;
      }
      .header-title-icon {
        display: inline-block;
        margin-left: 16px;
        font-size: 14px;
        color: #2777ff;
      }
    }

    button {
      margin-left: 10px;
    }
  }

  .btn-height {
    height: 34px;
  }

</style>
