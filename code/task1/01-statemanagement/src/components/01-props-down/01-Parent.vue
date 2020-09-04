<template>
  <div>
    <h1>Props Down Parent</h1>
    <child title="hello child" :msg="msg"></child>
  </div>
</template>

<script>
import child from "./01-Child";
export default {
  data: () => ({
    msg: "hello vue"
  }),
  components: {
    child
  }
};
</script>

<style>
</style>