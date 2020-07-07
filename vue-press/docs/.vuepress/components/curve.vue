<template>
  <div class="grid-content">
    <ed-curve :chart_data="chart_data_sale" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart_data_sale: {
        name: 'Sale',
        xData: ['18/01', '19/01', '20/01', '21/01', '22/01', '23/01'],
        yData: [[20000, 11500, 24321, 13000, 25000, 1200], [9456, 21345, 12345, 39876, 5678, 34000]]
      }
    }
  }
}
</script>
