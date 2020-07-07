<template>
  <div class="grid-content">
    <ed-bar :chart_data="chart_data_age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart_data_age: {
        name: 'Age',
        xData: ['< 24', '25-30', '31-35', '36-40', '≥ 41'],
        yData: [[22, 28, 26, 17, 8]]
      }
    }
  }
}
</script>
