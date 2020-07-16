<template>
  <el-input v-bind="$attrs" v-on="$listeners" class="ed-input" :class="getClassNames"></el-input>
</template>

<script>
export default {
  name: "EdInput",
  props: {
    sizeName: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
    }
  },
  computed: {
    getClassNames() {
      if (this.type !== 'textarea') {
        return `ed-input--${this.sizeName}`
      } else {
        return `ed-textarea--${this.sizeName}`
      }
    }
  },
}
</script>
