<template>
  <div>
    <ed-tag size="small">1hdshadwqhfjfwk dshwjhwhdjsjjhu</ed-tag>
    <ed-tag size="small">Female</ed-tag>
    <ed-tag dashed>Female hello world</ed-tag>
    <ed-tag>Female hello world</ed-tag>
    <ed-tag size="medium">
      Female hello world you me
      <i class="el-icon-plus" slot="plus"></i>
      <i class="el-icon-close" slot="close"></i>
    </ed-tag>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  /* padding: 0; */
}

</style>
