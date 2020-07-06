<template>
  <div class="">
    <ed-pie :dataSeries="dataSeries" :colorData="colorData" :dataLegend="dataLegend"></ed-pie>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSeries: [
        { value: 335, name: '< 3 Months' },
        { value: 310, name: '3-5 Months' },
        { value: 234, name: '6-8 Months' },
        { value: 135, name: '9-11 Months' },
        { value: 1548, name: '≥ 12 Months' }
      ],
      colorData: ['#8EB4FF', '#4E89FE', '#C6DAFF', '#85CDFF', '#0058FF'],
      dataLegend: ['< 3 Months', '3-5 Months', '6-8 Months', '9-11 Months', '≥ 12 Months']
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
