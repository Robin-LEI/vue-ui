<template>
  <div class="">
    <ed-header-title title="这是一个标题" />

    <ed-header-title title="这是一个标题">
      <div slot="rightContent" class="click-button">
        <ed-button :nobg="true">取消按钮</ed-button>
        <ed-button>主要按钮</ed-button>
      </div>
    </ed-header-title>
  </div>
</template>

