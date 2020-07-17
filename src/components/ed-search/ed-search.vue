<template>
  <div class="ed-search-box">
    <div class="left">
      <ed-input @input="changeInput" :placeholder="placeholder" v-model="input"></ed-input>
      <slot name="searchButton"></slot>
    </div>
    <div class="right">
      <slot name="searchRightButton"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdSearch",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      input: ""
    }
  },
  methods: {
    changeInput() {
      this.$emit('input', this.input.trim())
      this.$emit('on-change', this.input.trim())
    }
  },
}
</script>

<style scoped lang="scss">
.ed-search-box {
  display: flex;
  justify-content: space-between;
  .ed-input, .ed-button {
    margin-right: 10px;
  }
  .ed-button:last-child {
    margin-right: 0px;
  }
}
</style>
