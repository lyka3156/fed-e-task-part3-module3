module.exports = {
  // nuxt.config.js  https://www.pianshen.com/article/6712198551/

  /**
   * head config        https://vue-meta.nuxtjs.org/api/#headattrs
   */
  head: {
    title: "lyk-realworld",
    // titleTemplate: "%s - Nuxt.js", // %s 就是 title
    titleTemplate: (titleChunk) => {
      // titleChunk 就是 title
      return titleChunk ? `${titleChunk} - Nuxt` : "Nuxt";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
  /**
   * router config
   */
  router: {
    // middleware: "authorization",  // 使用authorization中间件
    // 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置
    // 默认 'nuxt-link-active'
    linkActiveClass: "active",
    // 基础路劲
    base: "/",
    // 路由配置
    extendRoutes(routes, resolve) {
      //   console.log(routes);
      //   {
      //     name: '404',
      //     path: '/404',
      //     component: 'D:\\\\project\\\\react-lgjy\\\\fed-e-task-part3-module3\\\\code\\\\task4\\\\realworld-nuxtjs\\\\pages\\\\404.vue',
      //     chunkName: 'pages/404'
      //   }
      // 1. 清除 nuxt.js 基于 pages 目录默认生成的路由规则
      routes.splice(0);
      // 2. 自定义路由配置
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout"),
            // 嵌套路由
            children: [
              // 默认子路由   访问  /
              {
                path: "/",
                name: "home",
                component: resolve(__dirname, "pages/home"),
              },
              // 登录
              {
                path: "/login",
                name: "login",
                component: resolve(__dirname, "pages/login"),
              },
              // 注册
              {
                path: "/register",
                name: "register",
                component: resolve(__dirname, "pages/login"),
              },
              // 用户页面 个人信息
              {
                path: "/profile/:username",
                name: "profile",
                component: resolve(__dirname, "pages/profile"),
              },
              // 用户页面/喜欢的文章
              {
                path: "/profile/:username/favorites",
                name: "profileFavorites",
                component: resolve(__dirname, "pages/profile"),
              },
              // 用户设置
              {
                path: "/settings",
                name: "settings",
                component: resolve(__dirname, "pages/settings"),
              },
              // 文章详情
              {
                path: "/article/:slug",
                name: "article",
                component: resolve(__dirname, "pages/article"),
              },
              // 发布文章
              {
                path: "/editor",
                name: "articleCreate",
                component: resolve(__dirname, "pages/editor"),
              },
              // 编辑文章
              {
                path: "/editor/:slug",
                name: "articleEdit",
                component: resolve(__dirname, "pages/editor"),
              },
            ],
          },
          // 404
          {
            name: "custom",
            path: "*",
            component: resolve(__dirname, "pages/404.vue"),
          },
        ]
      );
    },
  },

  // mode: "universal",
  /**
   * Global css
   */
  css: [],
  /**
   * Customize the progress-bar color
   */
  loading: {
    color: "#fff",
  },
  /**
   * Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/request.js",  // 注册插件，在插件里有个上下文对象   处理request
    "~/plugins/dayjs.js"  // 注册插件，在插件里有个上下文对象     处理date
  ],
  /**
   * Nuxt.js modules
   */
  modules: [],
  /**
   * Build configuration
   */
  build: {},
};
