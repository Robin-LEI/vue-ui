<template>
  <ed-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu class="ed-dropdown-menu ed-dropdown-menu--outer" slot="dropdown">
        <el-dropdown-item >狮子头</el-dropdown-item>
        <el-dropdown-item divided>
          <ed-dropdown>
            <span class="el-dropdown-link">
            测试
          </span>
          <el-dropdown-menu slot="dropdown" class="ed-dropdown-menu ed-dropdown-menu--nest">
            <el-dropdown-item >sub1</el-dropdown-item>
            <el-dropdown-item >sub2</el-dropdown-item>
          </el-dropdown-menu>
          </ed-dropdown>
        </el-dropdown-item>
        <el-dropdown-item :disabled="true">双皮奶</el-dropdown-item>
        <el-dropdown-item :divided="true">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </ed-dropdown>
</template>
