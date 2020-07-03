module.exports = {
    base: '/', //站点的基础路径
    title: 'VUE UI', //网站的标题
    description: 'Vuepress vue ui', //描述
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
            { text: '开始', link: '/doc/quick-start.md' },

        ],
        sidebar: [
            ['/doc/quick-start.md', '快速上手'],
            {
                title: '基础组件',
                children: [
                    ['/doc/button.md', '按钮Button'],
                    ['/doc/input.md', '输入框Input']
                ]
            },
            {
                title: '弹窗组件',
                children: [
                    ['/doc/dialog.md', '对话框Dialog'],
                    ['/doc/message-box.md', '弹框MessageBox'],
                    ['/doc/message.md', '消息提示Message']
                ]
            }
        ]
    }
}