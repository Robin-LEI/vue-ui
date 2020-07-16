# 分页 EdPagination
<br>

<doc-pagination />

<br>
<br>

<<<@/docs/.vuepress/components/doc-pagination.vue


# 属性 Attributes

|参数|说明|类型|可选值|默认值|回调参数|
|------|------|------|------|------|------|
|page|当前页码编号|number|-|-|-|
|page_sizes|每页可选size列表|array|-|[10, 20, 30, 40, 50]|-|
|total|总数|number|-|-|-|
|handleCurrentChange|点击当前页码时触发|event|-|-|当前页|
|handleSizeChange|选择每页显示size时触发|event|-|-|每页条目数|
