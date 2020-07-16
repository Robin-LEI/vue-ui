# vuepress遵循约定优于配置的原则

### 导入代码段

>你可以通过下述的语法导入已经存在的文件中的代码段：

```js
<<<@/docs/.vuepress/components/ed-button.vue
```

### stylus中引入静态资源
```stylus
<!-- 静态资源需要存放在public目录下 -->
background-image: url("/checked.png") !important;
```