<template>
  <ed-search placeholder="Please enter the yyy" v-model="inputV">
    <ed-button size="small" slot="searchButton" icon="el-icon-search">Search</ed-button>
    <ed-button size="small" slot="searchButton">Advanced search</ed-button>
    <ed-button size="small" slot="searchButton" :nobg="true">Export</ed-button>
    <ed-button size="small" slot="searchRightButton" icon="el-icon-circle-plus-outline">Configure a coupon</ed-button>
  </ed-search>
</template>

<script>
export default {
  data() {
    return {
      inputV: ""
    }
  }
}
</script>