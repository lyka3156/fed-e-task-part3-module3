<!-- 2. 子级 -->
<template>
  <div>
    <h1 :style="{ fontSize: fontSize + 'em' }">Props Down Child</h1>
    <button @click="handler">文字增大</button>
  </div>
</template>

<script>
export default {
  props: {
    fontSize: Number
  },
  methods: {
    handler() {
      // 子级通过 $emit 触发父级传递的事件
      this.$emit("enlargeText", 0.1);
    }
  }
};
</script>

<style>
</style>