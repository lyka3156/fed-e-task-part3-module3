<template>
  <div>
    <h1>ref Parent</h1>
    <child ref="c"></child>
  </div>
</template>

<script>
import child from "./04-Child";
export default {
  components: {
    child
  },
  mounted() {
    // 1. ref 绑定
    // 1.1 如果绑定的是普通元素，那拿到的就是 dom 元素
    // 1.2 如果绑定的是Vue组件，那拿到的就是 vue 实例对象
    this.$refs.c.focus();
    this.$refs.c.value = "hello input";
  }
};
</script>

<style>
</style>