module.exports = {
    base: '/', //站点的基础路径
    title: 'VUE UI', //网站的标题
    description: 'Vuepress vue ui', //描述
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: '/doc/firstBlog.md' },

        ],
        sidebar: [
            ['/', '首页'],
            {
                title: '我的博客',
                children: [
                    ['/doc/firstBlog.md', 'vuePress+github搭建博客'],
                    ['/doc/vue.md', 'md中使用vue']
                ]
            }
        ]
    }
}