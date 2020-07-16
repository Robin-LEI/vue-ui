<template>
  <el-tabs class="ed-tabs" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-tabs>
</template>

<script>
export default {
  name: "EdTabs",
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

</style>
