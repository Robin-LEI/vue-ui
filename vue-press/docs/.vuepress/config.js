module.exports = {
  base: '/', //站点的基础路径
  title: 'VUE UI', //网站的标题
  description: 'Vuepress vue ui', //描述
  // host: "172.16.210.199",
  port: "9546",
  head: [
      ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico`}]
  ],
  markdown: {
      lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
      // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/Robin-LEI',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
      nav: [
          { text: '主页', link: '/' },
          { text: '开始', link: '/doc/quick-start.md' }
      ],
      sidebar: [
          ['/doc/quick-start.md', '快速上手'],
          {
              title: '基础组件',
              children: [
                  ['/doc/button.md', '按钮Button'],
                  ['/doc/clamp.md', "数据截取Clamp"]
              ]
          },
          {
              title: '弹窗组件',
              children: [
                  ['/doc/dialog.md', '对话框Dialog'],
                  ['/doc/message-box.md', '弹框MessageBox'],
                  ['/doc/message.md', '消息提示Message']
              ]
          },
          {
              title: "数据",
              children: [
                  ['/doc/table.md', "表格"],
                  ['/doc/pagination.md', "分页"]
              ]
          },
          {
              title: "表单",
              children: [
                  ['/doc/radio.md', "单选框Radio"],
                  ['/doc/checkbox.md', "多选框Checkbox"],
                  ['/doc/input.md', '输入框Input'],
                  ['/doc/select.md', "下拉选择Select"],
                  ['/doc/switch.md', "开关Switch"]
              ]
          },
          {
              title: "图表组件",
              children: [
                  ['/doc/pie-echarts.md', "饼图"],
                  ['/doc/bar-echarts.md', "条形图"],
                  ['/doc/map-echarts.md', "地图"],
                  ['/doc/curve-echarts.md', "曲线图"],
                  ['/doc/sign-echarts.md', "正负条形图"]
              ]
          },
          {
              title: "案例展示",
              children: [
                  ['/doc/page-demo1.md', "demo1"]
              ]
          }
      ]
  }
}