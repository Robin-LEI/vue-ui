<template>
  <div class="">
    <ed-input v-model="input" placeholder="placeholder"></ed-input>
    <h2>大尺寸输入框</h2>
    <ed-input v-model="input" sizeName="medium" placeholder="placeholder"></ed-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    }
  }
}
</script>
