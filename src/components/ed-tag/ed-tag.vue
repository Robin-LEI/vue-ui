<template>
  <span class="ed-tag" :class="[`ed-tag--${size}`, {'ed-tag--dashed': dashed}]">
    <slot name="plus"></slot>
    <ed-clamp :max-lines="1">
      <slot></slot>
    </ed-clamp>
    <slot name="close"></slot>
  </span>
</template>

<script>
export default {
  name: "EdTag",
  props: {
    size: {
      type: String,
      default: "normal"
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
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

<style lang="scss">
.ed-tag {
  height:26px;
  background:rgba(74,144,226,0.07);
  border-radius:15px;
  border:1px solid rgba(39,119,255,1);
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #2777FF;
  font-size: 13px;
}

.ed-tag > div {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ed-tag--medium {
  width: 154px;
  padding: 0 12px;
}

.ed-tag--small {
  width: 70px;
}

.ed-tag--dashed {
  border:1px dashed rgba(198,219,255,1);
}

.ed-tag--normal {
  height: 30px;
  min-width: 88px;
  padding: 0 12px;
}
</style>
