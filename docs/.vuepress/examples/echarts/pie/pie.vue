<template>
  <div :class="className" class="pieBox">
  </div>
</template>

<script>
import echarts from 'echarts'
import { debounce } from '../../utils'
export default {
  name: "EdPie",
  props: {
    className: {
      type: String,
      default: 'pieEcharts'
    },
    // 主标题
    textName: {
      type: String,
      default: ''
    },
    dataSeries: {
      type: Array,
      required: true
    },
    dataLegend: {
      type: Array,
      required: true
    },
    colorData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
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
  methods: {
    initChart() {
      // const data = this.data
      // const _this = this
      this.chart = echarts.init(document.querySelector('.' + this.className), 'macarons')

      const option = {
        // 设置标题
        title: {
          show: true,
          // 主标题
          // text: this.textName,
          // 副标题
          // subtext: '1,088',
          // x: 'center',
          // y: '40',
          // 设置主标题的样式
          textStyle: {
            fontSize: 18,
            color: '#041039'
          },
          // 设置副标题的样式
          subtextStyle: {
            fontSize: 36,
            color: '#041039',
            fontWeight: 'bold'
          }
        },
        color: this.colorData,
        // tooltip: {
        //   show: false, // 关闭tooltip提示
        //   trigger: 'item',
        //   formatter: '{a} <br/>{b}: {c} ({d}%)'
        // },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: (params, ticket, callback) => {
            return `${params.name} <br/>${(params.percent || 0 * 100)}%`
          },
          // formatter: '{a} <br/>{b} : {c} ({d}%)',
          position: ['30%', '10%']
        },
        // 配置饼图内部的文本
        // title: {
        //   text: '80%',
        //   left: 'center',
        //   top: '50%',
        //   textStyle: {
        //     color: 'red'
        //   }
        // },
        // 与上面的title一起配置饼图显示多层文本
        // graphic: {
        //   type: 'text',
        //   left: 'center',
        //   top: '40%'
        // },
        legend: {
          orient: 'vertical',
          // 控制文本前面的矩形框的大小
          itemHeight: 10,
          itemWidth: 10,
          // 垂直文本之间的间距
          // itemGap: 20,
          // 距离顶部的高度
          top: 162,
          // 控制文本在右侧显示
          right: '10%',
          // 设置文本前面的矩形框的形状为圆形
          data: this.dataLegend
          // 格式化自定义文本
          // formatter: function(params) {
          //   console.log(params)
          // }
        },
        series: [
          {
            name: 'Total members',
            type: 'pie',
            // 控制饼图中心圆的大小
            // radius: ['46%', '35%'],
            radius: ['27%', '42%'],
            center: ['25%', '47.5%'],
            // radius: ['36%', '52%'],
            // 控制饼图的位置
            // center: ['28%', '52%'],
            avoidLabelOverlap: false,
            zlevel: 5,
            label: {
              // 为true默认显示
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false, // 饼图中间的文字是否显示
                fontSize: 16,
                formatter: function(params) {
                  return params.value + '%' + '\n' + params.name
                }
              },
              itemStyle: {
                borderWidth: 10
              }
            },
            labelLine: {
              show: false
            },
            data: this.dataSeries
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>

<style lang='scss' scoped>
.pieBox {
  width: 500px;
  height: 500px;
}
</style>