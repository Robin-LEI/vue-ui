<template>
  <div class="grid-content">
    <ed-schema :chart_data="chart_data_member_tags_shared" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart_data_member_tags_shared: {
        name: 'Top 5 shared member tags among audience'
      }
    }
  }
}
</script>
