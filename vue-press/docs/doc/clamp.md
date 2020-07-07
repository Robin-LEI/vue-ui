# 数据截取

### 在一个指定宽度的容器中，设置最多显示1行
<br />

<clamp />


<<<@/docs/.vuepress/components/clamp.vue

### 在一个指定的容器中，设置最多显示两行
<br />

<clamp2 />

<<<@/docs/.vuepress/components/clamp2.vue

# 属性Attributes
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|max-lines|控制最大显示行数|number|-|1
|autoresize |是否要自动适配根元素的尺寸变化|boolean|true/false|false
|ellipsis|文字被截断的时候显示的字符串|string|-|"..."