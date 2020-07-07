<!--
  2020.06.19
   折线图
-->
<template>
  <div :style="{height:height,width:width}" class="bar-chart"></div>
</template>
<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import { debounce } from '../../utils'
  export default {
    name: "EdBar",
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '320px'
      },
      chart_data: {}
    },
    data() {
      return {
        chart: null,
        line_style_color: ['#005FFF', '#1ABC9C'],
        line_shadow_style_color: ['rgba(0, 95, 255, .5)', 'rgba(26, 188, 156, .5)'],
        line_area_style: [{ start: 'rgba(205, 223, 255, 1)', end: 'rgba(237, 244, 255, 0.14)' }, { start: 'rgba(220, 255, 248, 1)', end: 'rgba(237, 244, 255, 0.14)' }],
        legend: ['Campaign group', 'Control group'],
        symbol_list: [require('../../assets/images/Oval.png'), require('../../assets/images/oval_green.png')],
        language: "lang_en"
      }
    },
    mounted() {
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    },
    watch: {
      chart_data: {
        deep: true,
        handler() {
          this.setOptions(this.chart_data)
        }
      },
      '$store.getters.sidebar.opened': {
        handler: function() {
          setTimeout(() => {
            this.chart.resize()
          }, 600)
        }
      },
      language() {
        this.setOptions(this.chart_data)
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.setOptions(this.chart_data)
      },
      setOptions({ name, xData, yData } = {}) {
        const _this = this
        this.chart.setOption({
          title: {
            text: name,
            textStyle: {
              color: 'rgba(4, 16, 57, 1)',
              fontWeight: 600,
              fontSize: 16
            },
            left: 'center',
            top: 20
          },
          legend: {
            show: yData.length > 1,
            orient: 'horizontal',
            align: 'auto',
            data: _this.legend,
            bottom: 20,
            icon: 'rect',
            itemWidth: 100,
            itemHeight: 2,
            itemGap: 100,
            textStyle: {
              color: 'rgba(102, 102, 102, 1)',
              fontWeight: 500,
              fontSize: 14
            }
          },
          grid: {
            top: 88,
            left: 36,
            right: 50,
            bottom: 24,
            containLabel: true
          },
          tooltip: {
            position: 'top',
            backgroundColor: 'rgba(0,0,0,0)', // ['#2276f2', '#1ABC9C'],
            formatter: function(params) {
              return `<div class="campaign_analysis_tooltip_1" style="">${params.data}</div>`
            }
          },
          xAxis: [{
            type: 'category',
            name: '(Age)',
            nameLocation: 'end',
            nameTextStyle: {
              color: 'rgba(51,51,51,1)',
              fontWeight: 600,
              fontSize: 14
            },
            nameGap: 2,
            boundaryGap: true,
            splitLine: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: 'rgba(204, 204, 204, 1)',
                width: 2
              }
            },
            axisTick: {
              show: true, // 显示刻度
              alignWithLabel: true,
              length: 6,
              lineStyle: {
                width: 2
              }
            },
            axisLabel: {
              margin: 10,
              color: 'rgba(102,102,102,1)',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: 17
            },
            data: xData
          }],
          yAxis: {
            type: 'value',
            show: true,
            name: '(Percentage)',
            nameLocation: 'end',
            nameTextStyle: {
              color: 'rgba(51,51,51,1)',
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 17,
              align: 'right',
              padding: [0, -34, 0, 0]
            },
            axisLine: {
              onZero: false,
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: ['rgba(241, 241, 241, 1)']
              }
            },
            splitArea: {
              show: false
            },
            axisTick: { // 刻度
              show: false
            },
            axisLabel: {
              color: 'rgba(102, 102, 102, 1)',
              fontWeight: 500,
              fontSize: 14
            }
          },
          series: (function(data_value) {
            const arr = []
            for (const index in data_value) {
              arr.push({
                type: 'bar',
                name: _this.legend[index || 0],
                itemStyle: {
                  normal: {
                    barBorderRadius: [2, 2, 0, 0],
                    color: '#4E89FE'
                  }
                },
                barWidth: 18,
                data: data_value[index || 0],
                animationDuration: 1100,
                animationEasing: 'cubicInOut'
              })
            }
            return arr
          })(yData)
        })
      }
    }
  }
</script>
<style lang="scss">
  .campaign_analysis_tooltip_1 {
    height: 24px;
    border-radius: 2px 2px 2px 0;
    padding: 2px 6px;
    position: relative;
    background: #4E89FE;
    box-shadow:0 3px 5px -2px rgba(137,161,203,1);
    &:before{
      content: '';
      bottom: -4px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px;
      transform: rotate(135deg);
      border-color: #4E89FE #4E89FE transparent transparent;
      box-shadow:0 3px 5px -2px rgba(137,161,203,1);
    }
  }
</style>
