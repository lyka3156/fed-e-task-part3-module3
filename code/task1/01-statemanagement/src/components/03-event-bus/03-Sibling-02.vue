<template>
  <div>
    <h1>Event Bus Sibling02</h1>

    <div>{{ msg }}</div>
  </div>
</template>

<script>
import bus from "./eventbus";
export default {
  data() {
    return {
      msg: ""
    };
  },
  created() {
    // 订阅numchange事件
    bus.$on("numchange", value => {
      this.msg = `您选择了${value}件商品`;
    });
  }
};
</script>

<style>
</style>