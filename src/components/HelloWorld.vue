<template>
  <div>
    <button @click="onClick($event)">
      <span>click me</span>
    </button>
    <base-input v-on:focus.native="onFocus"></base-input>

    <div class="test-select">
      <ed-select v-model="value" clearable placeholder="请选择" @change="changeValue">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </ed-select>
    </div>

    <ed-radio v-model="radio" label="1">备选项1</ed-radio>
    <ed-radio v-model="radio" label="2">备选项2</ed-radio>

    <ed-checkbox v-model="checked">备选项</ed-checkbox>

    <br>
    <br>
    <ed-input v-model="input" placeholder="hello"></ed-input>

    <ed-pagination
      :page="1"
      :page_sizes='[10,20,30,40,50]'
      :total='100'
  ></ed-pagination>

    <!-- <ed-button>hello</ed-button>
    <ed-pie :dataSeries="dataSeries" :dataLegend="dataLegend" :colorData="colorData"></ed-pie>
    <div class="clampbox">
      <ed-clamp :max-lines="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur quam, illo tempora cupiditate eum eaque, aliquam totam magni culpa ducimus accusamus minima dolores tenetur quos. Voluptate, quod nobis! Reprehenderit.</ed-clamp>
    </div>
    <div class="grid-content">
      <ed-bar :chart_data="chart_data_age" />
    </div>
    <div class="grid-content">
      <ed-sign :chart_data="chart_data_gender" />
    </div>
    <div class="grid-content">
      <ed-curve :chart_data="chart_data_sale" />
    </div>
    <div class="grid-content">
      <ed-schema :chart_data="chart_data_member_tags_shared" />
    </div>
    <div>
      <page-demo1></page-demo1>
    </div>

    <div>
      <ed-header-title title="这是一个标题" />

      <ed-header-title title="这是一个标题">
        <div slot="rightContent" class="click-button">
          <ed-button :nobg="true">取消按钮</ed-button>
          <ed-button>主要按钮</ed-button>
        </div>
      </ed-header-title>
    </div>

    <div class="tooltip">
      <ed-popover content="Top Left 提示文字">
        <i class="el-icon-delete"></i>
      </ed-popover>
    </div> -->
  </div>
</template>

<script>
// import PageDemo1 from "../examples/page_demo1"
import BaseInput from "./base-input"
export default {
  name: 'HelloWorld',
  components: {
    // PageDemo1,
    BaseInput
  },
  props: {
    msg: String
  },
  data() {
    return {
      input: "",
      checked: true,
      radio: '1',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      dataSeries: [
        { value: 335, name: '< 3 Months' },
        { value: 310, name: '3-5 Months' },
        { value: 234, name: '6-8 Months' }
      ],
      dataLegend: ["< 3 Months", "3-5 Months", "6-8 Months"],
      colorData: ['#8EB4FF', '#4E89FE', '#C6DAFF'],
      chart_data_age: {
        name: 'Age',
        xData: ['< 24', '25-30', '31-35', '36-40', '≥ 41'],
        yData: [[22, 28, 26, 17, 8]]
      },
      chart_data_gender: {
        name: 'Gender',
        data: [51.79, 43.28, 4.39]
      },
      chart_data_member_tags_shared: {
        name: 'Top 5 shared member tags among audience'
      },
      chart_data_sale: {
        name: 'Sale',
        xData: ['18/01', '19/01', '20/01', '21/01', '22/01', '23/01'],
        yData: [[20000, 11500, 24321, 13000, 25000, 1200], [9456, 21345, 12345, 39876, 5678, 34000]]
      }
    }
  },
  methods: {
    onClick(e) {
      console.log(e.target)
      console.log(e.currentTarget)
    },
    onFocus() {
      console.log('onFocus')
    },
    changeValue(val) {
      console.log(val)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clampbox {
  width: 300px;
}

.tooltip {
  height: 100px;
}
.test-select {
  width: 300px;
}
</style>
