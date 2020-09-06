<!-- 布局组件 -->
<template>
  <div id="root">
    <!-- 1. header 部分 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <nuxt-link class="nav-link active" to="/">Home</nuxt-link> -->
            <nuxt-link exact class="nav-link" to="/">Home</nuxt-link>
          </li>
          <!-- 登录显示的导航图标 -->
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                name: 'profile',
                params: {
                  username: user.username
                }
              }"
              >
                <img class="user-pic" :src="user.image" />
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <!-- 未登录显示的导航图标 -->
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!--  2. 子路由: 页面主体内容 -->
    <nuxt-child />
    <!-- 3. Footer 部分 -->
    <footer>
      <div class="container">
        <nuxt-link class="logo-font" to="/">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LayoutIndex",
  computed: {
    ...mapState(["user"]), // user 登录的状态
  },
};
</script>
