<template>
  <div>
    <div class="header">user 头部</div>

    <!-- 嵌套路由的内容 -->
    <div class="content">
      <nuxt-child></nuxt-child>
    </div>

    <div class="footer">user 底部</div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.header,
.footer {
  height: 50px;
  line-height: 50px;
  background: #ccc;
}
.content {
  height: 100px;
}
</style>
