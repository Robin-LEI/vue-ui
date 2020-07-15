module.exports = {
  base: '/', //站点的基础路径
  title: 'VUE UI', //网站的标题
  description: 'UI component library documentation', //描述
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
      repo: 'https://www.fidescloud.com',
      // 自定义仓库链接文字。
      repoLabel: 'Fides Cloud',
      nav: [
          { text: '主页', link: '/' },
          { text: '开始', link: '/doc/quick-start.md' }
      ],
      sidebar: [
          ['/doc/quick-start.md', '快速上手'],
          ['/doc/ui-standard.md', 'UI规范'],
          ['/doc/controls-standard.md', '控件规范'],
          {
              title: '基础组件',
              children: [
                  ['/doc/button.md', '按钮Button'],
                  ['/doc/clamp.md', "数据截取Clamp"],
                  ['/doc/ed-header-title.md', "模块标题EdHeaderTitle"],
                  ['/doc/ed-popover.md', "文字提示EdPopover"]
              ]
          },
          {
            title: "导航组件",
            children: [
                ['/doc/tabs.md', 'Tabs标签页'],
                ['/doc/dropdown.md', 'Dropdown下拉菜单']
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
                  ['/doc/radio.md', "Radio单选框"],
                  ['/doc/checkbox.md', "Checkbox多选框"],
                  ['/doc/input.md', 'Input输入框'],
                  ['/doc/select.md', "Select选择器"],
                  ['/doc/switch.md', "Switch开关"],
                  ['/doc/form.md', 'Form表单']
              ]
          },
          {
              title: "图表组件",
              children: [
                  ['/doc/pie-echarts.md', "饼图"],
                  ['/doc/bar-echarts.md', "条形图"],
                  ['/doc/map-echarts.md', "地图"],
                  ['/doc/curve-echarts.md', "曲线图"],
                  ['/doc/sign-echarts.md', "正负条形图"],
                  ['/doc/schema-echarts.md', "关系图"]
              ]
          },
          {
            title: "其它相关",
            children: [
                ['/doc/carousel.md', "Carousel走马灯"],
                ['/doc/scrollbar.md', "滚动条EdScrollbar"]
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