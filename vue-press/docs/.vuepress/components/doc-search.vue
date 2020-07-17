<template>
  <ed-search placeholder="Please enter the xxx" v-model="inputV">
    <ed-button size="small" slot="searchButton" icon="el-icon-search">Search</ed-button>
    <ed-button size="small" slot="searchButton">Advanced search</ed-button>
    <ed-button size="small" slot="searchButton" :nobg="true">Export</ed-button>
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