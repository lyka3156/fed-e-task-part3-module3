<!-- login/register 登录/注册 -->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- 登录就跳转到注册，注册跳转到登录页 -->
            <nuxt-link
              :to="{
                name : isLogin ? 'register' : 'login'
              }"
            >{{isLogin? "Need an account?":"Have an account?"}}</nuxt-link>
          </p>
          <!-- 错误信息 -->
          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <template v-if="Array.isArray(messages)">
                <li v-for="(message,index) in messages" :key="index">{{ field }} {{ message}}</li>
              </template>
              <template v-else>
                <li :key="messages">{{ field }} {{ messages}}</li>
              </template>
            </template>
          </ul>
          <form @submit.prevent="loginIn">
            <!-- 登录不需要用户名 -->
            <fieldset v-if="!isLogin" class="form-group">
              <input
                required
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
              />
            </fieldset>
            <!-- 邮箱 -->
            <fieldset class="form-group">
              <input
                required
                type="email"
                v-model="user.email"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <!-- 密码 -->
            <fieldset class="form-group">
              <input
                required
                minlength="8"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
              />
            </fieldset>
            <!-- 登录/注册 -->
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            >{{isLogin?"Sign in":"Sign up"}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from "@/api/user";
// 仅在客户端才引入这个cookie包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "notAuthorization", // 使用中间件控制权限
  name: "LoginIndex",
  data() {
    return {
      // 表单信息
      user: {
        username: "",
        email: "1210167160@qq.com",
        password: "liuyongkanga3156",
      },
      // 错误信息
      errors: {},
    };
  },
  computed: {
    // 是否是登录页面
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async loginIn() {
      //  1. 提交表单请求登录
      try {
        const data = await (this.isLogin ? login : register)({
          user: { ...this.user },
        });
        // 2. 保存用户的登录状态
        const { user } = data;
        // 2.1 存储到容器中是为了方便组件共享
        this.$store.commit("setUser", user);
        // 2.2 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set("user", user);
        // 3. 跳转到首页
        this.$router.push("/");
      } catch (error) {
        // 保存错误信息
        this.errors = error.response.data.errors;
      }
    },
  },
  watch: {
    // 用户登录和用户注册切换的时候，清空数据
    isLogin() {
      this.errors = {};
    },
  },
};
</script>
