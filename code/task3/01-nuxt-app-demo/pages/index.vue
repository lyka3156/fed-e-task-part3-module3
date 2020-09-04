<template>
  <div>
    <h2>1. a 标签导航</h2>
    <a href="/user">a标签/user</a><br />
    <a href="/about">a标签/about</a><br />
    <h2>2. nuxt-link导航</h2>
    <nuxt-link to="/user">nuxt-link/user</nuxt-link><br />
    <nuxt-link to="/about">nuxt-link/about</nuxt-link><br />
    <h2>3. 编程式导航</h2>
    <button @click="toUser">编程式导航/user</button><br />
    <button @click="toAbout">编程式导航/about</button>
  </div>
</template>
<script>
export default {
  methods: {
    toUser() {
      this.$router.push("/user");
    },
    toAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
