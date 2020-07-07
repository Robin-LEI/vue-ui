<!--
  2020.06.23
  关系图
-->
<template>
  <div :style="{height:height,width:width}" class="graph-chart-campaign-analysis"></div>
</template>
<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons')
  import { debounce } from '../../utils'
  export default {
    name: "EdSchema",
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '320px '
      },
      chart_data: {}
    },
    data() {
      return {
        language: "lang_en",
        client_width: 0,
        chart: null,
        color_list: ['#005FFF', 'rgba(23,64,170,1)', 'rgba(134,211,242,1)', '#85CDFF', '#C6DAFF'],
        shadow_color_list: ['rgba(183,210,255,1)', 'rgba(157,182,230,1)', 'rgba(134,211,242,1)', '#8EB4FF', '#8EB4FF'],
        categories_list: [{
          name: 'No.1',
          itemStyle: {
            color: 'rgba(23,64,170,1)'
          }
        },
        {
          name: 'No.2',
          itemStyle: {
            color: '#005FFF'
          }
        }, {
          name: 'No.3',
          itemStyle: {
            color: '#10a050'
          }
        },
        {
          name: 'No.4',
          itemStyle: {
            color: '#8EB4FF'
          }
        }, {
          name: 'No.5',
          itemStyle: {
            color: '#8EB4FF'
          }
        }]
      }
    },
    mounted() {
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.dispose()
          this.initChart()
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
            this.chart.clear()
            this.setOptions(this.chart_data)
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
        // this.chart.showLoading()
        this.setOptions(this.chart_data)
        // setTimeout(() => {
        //   this.chart.hideLoading()
        // }, 300)
      },
      // {name, data}
      setOptions({ name } = {}) {
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
            orient: 'vertical',
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 15,
            textStyle: {
              color: 'rgba(102, 102, 102, 1)',
              fontWeight: 400,
              fontSize: 14,
              padding: [0, 0, 0, 15]
            },
            y: 'center',
            x: '64%'
          },
          tooltip: {},
          animationDurationUpdate: function(idx) {
            return idx * 100
          },
          animationEasingUpdate: 'bounceIn',
          series: [{
            type: 'graph',
            layout: 'force',
            center: [_this.chart.getWidth() * 0.70, 145],
            force: {
              repulsion: 200,
              edgeLength: 50,
              layoutAnimation: true
            },
            label: {
              normal: {
                show: true,
                color: '#FFFFFF',
                fontWeight: 600
              }
            },
            roam: false, // 是否开启鼠标缩放和平移漫游
            categories: _this.categories_list,
            data: [{
              name: 'No.1',
              category: 0,
              symbolSize: 105,
              draggable: true,
              itemStyle: {
                shadowBlur: 18,
                shadowColor: 'rgba(183,210,255,1)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                color: '#005FFF'
              },
              label: {
                fontSize: 16,
                lineHeight: 22
              }
            }, {
              category: 1,
              name: 'No.2',
              symbolSize: 95,
              draggable: true,
              itemStyle: {
                shadowBlur: 18,
                shadowColor: 'rgba(157,182,230,1)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                color: 'rgba(23,64,170,1)'
              },
              label: {
                fontSize: 15,
                lineHeight: 20
              }
            }, {
              category: 2,
              name: 'No.3',
              symbolSize: 85,
              draggable: true,
              itemStyle: {
                shadowBlur: 18,
                shadowColor: 'rgba(134,211,242,1)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                color: 'rgba(134,211,242,1)'
              },
              label: {
                fontSize: 14,
                lineHeight: 18
              }
            }, {
              category: 3,
              name: 'No.4',
              symbolSize: 75,
              draggable: true,
              itemStyle: {
                shadowBlur: 18,
                shadowColor: '#8EB4FF',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                color: '#85CDFF'
              },
              label: {
                fontSize: 13,
                lineHeight: 16
              }
            }, {
              category: 4,
              name: 'No.5',
              symbolSize: 65,
              draggable: true,
              itemStyle: {
                shadowBlur: 18,
                shadowColor: '#8EB4FF',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                color: '#C6DAFF'
              },
              label: {
                fontSize: 12,
                lineHeight: 14
              }
            }]
          }]
        })
      }
    }
  }
</script>