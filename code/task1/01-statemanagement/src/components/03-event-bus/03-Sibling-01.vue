<template>
  <div>
    <h1>Event Bus Sibling01</h1>
    <button @click="sub">-</button>
    <input type="text" style="width: 30px; text-align: center" :value="value" />
    <button @click="add">+</button>
  </div>
</template>

<script>
import bus from "./eventbus";

export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    // 数量-1
    sub() {
      if (this.value > 1) {
        this.value--;
        //  发布numchange事件
        bus.$emit("numchange", this.value);
      }
    },
    // 数量+1
    add() {
      this.value++;
      bus.$emit("numchange", this.value);
    }
  }
};
</script>

<style>
</style>