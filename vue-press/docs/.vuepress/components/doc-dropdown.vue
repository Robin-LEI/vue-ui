<template>
  <ed-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu class="ed-dropdown-menu ed-dropdown-menu--outer" slot="dropdown">
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item divided>双皮奶</el-dropdown-item>
        <el-dropdown-item disabled>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </ed-dropdown>
</template>