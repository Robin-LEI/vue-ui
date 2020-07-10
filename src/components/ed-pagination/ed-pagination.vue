<!--分页-->
<template>
  <div :class="['pagination-container',{'small': type=='small'||size=='small'}]" v-if="total > 0">
    <el-pagination
      :current-page="page"
      :layout="layout"
      :page-size="page_size"
      :page-sizes="page_sizes"
      :total="total"
      :pager-count="pager_count"
      @current-change="handleCurrentChange"
      @size-change = "handleSizeChange"
      background>
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: "EdPagination",
    props: {
      layout: {
        type: String,
        default: 'total, prev, pager, next, jumper'
      },
      page: {
        type: Number,
        default: 1
      },
      page_size: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 1
      },
      page_sizes: {
        type: Array,
        default: function() {
          return [10, 20, 30, 40, 50]
        }
      },
      pager_count: {
        type: Number,
        default: 5
      },
      type: {
        type: String,
        default: function() {
          return 'medium'
        }
      },
      size: {
        type: String,
        default: function() {
          return 'medium'
        }
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit('handleCurrentChange', val)
      },
      handleSizeChange(val) {
        this.$emit('handleSizeChange', val)
      }
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
$new-primary: "#2777ff";
  .pagination-container {
    text-align: right;
    padding: 16px 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-pagination {
      padding: 0;
      white-space: normal;
      &.is-background .el-pager li:not(.disabled).active {
        background-color: $new-primary;
      }
      &.el-pagination.is-background .el-pager li:not(.active):hover{
        color: $new-primary;
      }
    }
    &.small {
      padding-top: 8px !important;
      /deep/ .el-pagination span:not([class*=suffix]),
      /deep/ .el-pagination button,
      /deep/ .el-pager li {
        font-size: 12px !important;
      }
    }
  }
</style>
