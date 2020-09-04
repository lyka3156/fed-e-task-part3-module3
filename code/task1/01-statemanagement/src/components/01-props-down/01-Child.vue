<template>
  <div>
    <h1>Props Down Child</h1>
    <h2>静态传值{{ title }} - 动态传值{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  // 接受父级传递的属性的两种方式
  // 1. 数组： 每一项代表一个属性
  // 2. 对象： key代表属性，value代表属性的修饰符   限制属性的传递类型
  // props: ['title'],
  props: {
    title: String,
    msg: String
  }
};
</script>

<style>
</style>