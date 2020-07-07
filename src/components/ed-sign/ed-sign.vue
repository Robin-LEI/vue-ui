<!--
  2020.06.22
  柱状图
-->
<template>
  <div :style="{height:height,width:width}" class="gender-bar-chart"></div>
</template>
<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons')
  import { debounce } from '../../utils'
  export default {
    name: "EdSign",
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
        language: "lang_en",
        chart: null,
        color_list: ['#4E89FE', '#85CDFF', '#C2C0C0'],
        img1: {
          a: require('../../assets/images/nanren.png'),
          b: require('../../assets/images/nvrentouxiang.png'),
          c: require('../../assets/images/yzzxrenwu.png')
        }
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
      language() {
        this.setOptions(this.chart_data)
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')
        this.setOptions(this.chart_data)
      },
      setOptions({ name, data } = {}) {
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
          grid: {
            left: 60,
            right: 33,
            bottom: 0,
            top: 52,
            containLabel: true
          },
          tooltip: {
            show: false
          },
          xAxis: {
            show: false,
            max: 100,
            type: 'value'
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            data: data,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#3e86dd'
              }
            },
            axisLabel: {
              margin: 20,
              formatter: function(params) {
                if (params === data[0].toString()) {
                  return ('{a|a}')
                } else if (params === data[1].toString()) {
                  return ('{b|b}')
                } else if (params === data[2].toString()) {
                  return ('{c|c}')
                }
              },
              rich: {
                a: {
                  backgroundColor: {
                    image: _this.img1.a
                  },
                  color: 'rgba(0,0,0,0)',
                  width: 30,
                  height: 36
                },
                b: {
                  backgroundColor: {
                    image: _this.img1.b
                  },
                  color: 'rgba(0,0,0,0)',
                  width: 30,
                  height: 34
                },
                c: {
                  backgroundColor: {
                    image: _this.img1.c
                  },
                  color: 'rgba(0,0,0,0)',
                  width: 30,
                  height: 30
                }
              }
            }
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                fontSize: 18,
                fontWeight: 500,
                color: function(value, index) {
                  return _this.color_list[index]
                }
              },
              formatter: function(value) {
                return value.toLocaleString() + '%'
              }
            },
            data: data
          }],
          series: [{
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 9,
                color: function(params) {
                  return _this.color_list[params.dataIndex]
                }
              }
            },
            data: data,
            showBackground: true,
            barCategoryGap: '62px',
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#EAF1FF' // 0% 处的颜色
                }, {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              borderColor: 'rgba(242,242,242,1)',
              borderWidth: 2,
              barBorderRadius: 11
            }
          }]
        })
      }
    }
  }
</script>
<style lang="scss">
  .campaign_analysis_pie_chart{
    label{

    }
  }
</style>
