<template>
  <div class="">
    <ed-list-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column
        :width="220"
        align="center"
        label="Operation">
        <template>
          <div class="operation">
            <label>Edit</label>
          <label>Delete</label>
          </div>
        </template>
      </el-table-column>
    </ed-list-table>
    <ed-pagination
      :page="page_no"
      :page_sizes='[10,20,30,40,50]'
      :total='total'
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
  ></ed-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5,
      page_no: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  },
  methods: {
    handleCurrentChange() {},
    handleSizeChange() {}
  },
}
</script>

<style scoped lang="scss">

</style>
