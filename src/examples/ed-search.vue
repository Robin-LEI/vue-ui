<template>
  <div class="">
    <ed-search placeholder="Please enter the xxx 2" v-model="inputV">
      <ed-button size="small" slot="searchButton">Search</ed-button>
      <ed-button size="small" slot="searchButton">Advanced search</ed-button>
      <ed-button size="small" slot="searchButton" :nobg="true">Export</ed-button>
      <ed-button size="small" slot="searchRightButton">Add a coupon</ed-button>
      <ed-button size="small" slot="searchRightButton">Configure a coupon</ed-button>
    </ed-search>

    <h1>{{inputV}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputV: ""
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
