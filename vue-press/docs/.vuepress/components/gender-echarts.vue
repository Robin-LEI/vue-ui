<template>
  <div class="grid-content">
    <ed-sign :chart_data="chart_data_gender" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart_data_gender: {
        name: 'Gender',
        data: [51.79, 43.28, 4.39]
      }
    }
  }
}
</script>
