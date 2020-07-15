<template>
  <div class="btn-module">
    <ed-button>主要按钮</ed-button>
    <ed-button :islogin="true">登陆按钮</ed-button>
    <ed-button :nobg="true">取消按钮</ed-button>
    <ed-button :loading="true">loading效果</ed-button>
    <ed-button :nobg="true" :loading="true">loading效果</ed-button>
    <ed-button :disabled="true">禁用按钮</ed-button>
    <ed-button icon="el-icon-delete">删除图标按钮</ed-button>
  </div>
</template>
