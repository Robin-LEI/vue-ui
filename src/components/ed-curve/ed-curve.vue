<!--
  2020.06.19
   折线图
-->
<template>
  <div :style="{height:height,width:width}" class="line-chart"></div>
</template>
<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import { debounce } from '../../utils'
  export default {
    name: "EdCurve",
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '450px'
      },
      chart_data: {}
    },
    data() {
      return {
        language: "lang_en",
        chart: null,
        line_style_color: ['#005FFF', '#1ABC9C'],
        line_shadow_style_color: ['rgba(0, 95, 255, .5)', 'rgba(26, 188, 156, .5)'],
        line_area_style: [{ start: 'rgba(205, 223, 255, 1)', end: 'rgba(237, 244, 255, 0.14)' }, { start: 'rgba(220, 255, 248, 1)', end: 'rgba(237, 244, 255, 0.14)' }],
        legend: ['Campaign group', 'Control group'],
        symbol_list: [require('../../assets/images/Oval.png'), require('../../assets/images/oval_green.png')]
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
            left: 12,
            right: 54,
            bottom: 86,
            containLabel: true
          },
          tooltip: {
            position: 'top',
            backgroundColor: 'rgba(0, 0, 0, 0)', // ['#2276f2', '#1ABC9C'],
            formatter: function(params) {
              if (params.seriesIndex === 0) {
                return `<div class="campaign_analysis_tooltip_1" style="">${params.data}</div>`
              } else {
                return `<div class="campaign_analysis_tooltip_2" style="">${params.data}</div>`
              }
            }
          },
          xAxis: [{
            type: 'category',
            name: '(Date)',
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
            name: 'Sales(K)',
            nameLocation: 'end',
            nameTextStyle: {
              color: 'rgba(51,51,51,1)',
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 17,
              align: 'right',
              padding: [0, -10]
            },
            nameGap: 33,
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
                type: 'line',
                name: _this.legend[index || 0],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: _this.line_style_color[index || 0],
                    shadowColor: _this.line_shadow_style_color[index || 0],
                    shadowBlur: 12,
                    shadowOffsetY: 15
                  }
                },
                smooth: true,
                color: _this.line_style_color[index || 0],
                // 设置折线点的大小
                symbolSize: 25,
                // symbolSize: 25,
                symbol: 'image://' + _this.symbol_list[index || 0],
                showSymbol: true,
                data: data_value[index || 0],
                animationDuration: 1100,
                animationEasing: 'cubicInOut',
                itemStyle: {
                  // 静止时
                  normal: {
                    opacity: 0
                  },
                  emphasis: {
                    opacity: 1
                  }
                },
                areaStyle: {
                  origin: 'start',
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0, // x2为0，y2为1时表示从上到下
                    y2: 1, // x2为1，y2为0时表示从左到右
                    colorStops: [{
                      offset: 0, color: _this.line_area_style[index || 0].start // 0% 处的颜色
                    }, {
                      offset: 1, color: _this.line_area_style[index || 0].end // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                  opacity: 1
                }
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
  .campaign_analysis_tooltip_1, .campaign_analysis_tooltip_2 {
    height: 24px;
    border-radius: 2px 2px 2px 0;
    padding: 2px 6px;
    position: relative;
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
    }
  }
  .campaign_analysis_tooltip_1{
    background:linear-gradient(270deg,rgba(39,119,255,1) 0%,rgba(98,156,255,1) 100%);
    box-shadow:0 3px 5px -2px rgba(137,161,203,1);
    position: relative;
    &:before{
      border-color: #629CFF #629CFF transparent transparent;
      box-shadow:0 3px 5px -2px rgba(137,161,203,1);
    }
  }
  .campaign_analysis_tooltip_2{
    background:linear-gradient(270deg,rgba(0,181,145,1) 0%,rgba(29,220,183,1) 100%);
    box-shadow:0 3px 5px -2px rgba(142,207,193,1);
    position: relative;
    &:before{
      border-color: #1DDCB7 #1DDCB7 transparent transparent;
      box-shadow:0 3px 5px -2px #8ECFC1;
    }
  }
</style>
