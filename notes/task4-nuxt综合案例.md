# 1. nuxt 综合案例

[nuxt 指南](https://zh.nuxtjs.org/guide/configuration/)
[nuxt-config 的 router 配置](https://zh.nuxtjs.org/api/configuration-router/)
[nuxt Api](https://zh.nuxtjs.org/api/internals-nuxt)
[vue-router Api](https://router.vuejs.org/zh/guide/essentials/navigation.html)

## 1.1 [目录结构:](https://zh.nuxtjs.org/guide/directory-structure)

- assets 资源目录：
  - 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
- component 组件目录：
  - 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。
- layouts 布局目录:
  - 用于组织应用的布局组件。
  - 若无额外配置，该目录不能被重命名。
- middleware 中间件目录：
  - 用于存放应用的中间件。
- pages 页面目录：
  - 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。
  - 若无额外配置，该目录不能被重命名。
- plugins 插件目录:
  - 用于组织那些需要在 根 vue.js 应用 实例化之前需要运行的 Javascript 插件。
- static 静态文件目录:
  - 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
  - 举个例子: /static/robots.txt 映射至 /robots.txt
  - 若无额外配置，该目录不能被重命名。
- Store 目录:
  - 用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。
  - 若无额外配置，该目录不能被重命名。
- nuxt.config.js 文件:
  - 用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置。
  - 若无额外配置，该文件不能被重命名。
- package.json 文件
  - 用于描述应用的依赖关系和对外暴露的脚本接口。
  - 该文件不能被重命名
- 别名
  ```js
  别名	目录
  ~ 或 @	srcDir
  ~~ 或 @@	rootDir
  ```
- 默认情况下，srcDir 和 rootDir 相同。
  > 提示: 在您的 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png 方式。

## 1.2 介绍

- GitHub 仓库：https://github.com/gothinkster/realworld
- 在线示例：https://demo.realworld.io/#/
- 接口文档：https://github.com/gothinkster/realworld/tree/master/api
- 页面模板：https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md

## 1.3 创建项目

```md
# 创建项目目录

mkdir realworld-nuxtjs

# 进入项目目录

cd realworld-nuxtjs

# 生成 package.json 文件

npm init -y

# 安装 nuxt 依赖

npm install nuxt
```

在 <font color="red">package.json</font> 中添加启动脚本：

```js
"scripts": {
    "dev": "nuxt"
}
```

创建 <font color="red">pages/index.vue</font> ：

```vue
<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style></style>
```

启动服务：

```js
npm run dev
```

在浏览器中访问 http://localhost:3000/ 测试。

## 1.4 导入样式资源

app.html ：

```html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
    <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
    <link
      href="https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="//fonts.googleapis.com/css?
family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Sour
ce+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
    <!-- <link rel="stylesheet" href="//demo.productionready.io/main.css"> -->
    <link rel="stylesheet" href="/index.css" />
  </head>

  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

## 1.5 布局组件

[layout](https://zh.nuxtjs.org/api/pages-layout/)

### 1.5.1 使用默认布局组件

默认布局文件 pages/layout/default.vue

- pages/layout/default.vue 就是默认布局文件
- pages 的页面默认 layout 是 default.vue
- 你也可以手动指定 layout 布局组件

```js
// pages/layout/default.vue
<template>
  <div id="root">
    <!-- 1. header 部分 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
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
            <nuxt-link class="nav-link" to="/login">
              Sign in
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">
              Sign up
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!--  2. 页面主体内容 -->
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
export default {
  name: "LayoutIndex",
};
</script>

```

### 1.5.2 使用嵌套路由实现公用布局组件

1. 布局文件

- pages/layout/index.vue

2. nuxt.config.js 中自定义嵌套路由实现

```js
 router: {
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
                path: "/article/:id",
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
                path: "/editor/:id",
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
```

## 1.6 登录注册

pages/login.vue

```vue
<!-- login/register 登录/注册 -->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>
          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>
          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "default",
};
</script>
```

## 1.7 导入剩余页面

![avatar](../images/task4/导入剩余页面.png)

首页

```vue
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
              /></a>
              <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"
                ><img src="http://i.imgur.com/N4VcUeJ.jpg"
              /></a>
              <div class="info">
                <a href="" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                The song you won't ever stop singing. No matter how hard you
                try.
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "default",
};
</script>
```

用户页面

```vue
<!-- profile 个人信息 -->
<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" />
            <h4>Eric Simons</h4>
            <p>
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda
              looks like Peeta from the Hunger Games
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
              <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

          <div class="article-preview">
            <div class="article-meta">
              <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg"/></a>
              <div class="info">
                <a href="" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                The song you won't ever stop singing. No matter how hard you
                try.
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline">Music</li>
                <li class="tag-default tag-pill tag-outline">Song</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "default",
};
</script>
```

用户设置

```vue
<!-- Settings  用户设置 -->
<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "default",
};
</script>
```

创建文章/编辑文章

```vue
<!-- Create/Edit Article  发布文章/编辑文章 -->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
```

文章详情

```vue
<!-- Article 文章详情 -->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>How to build webapps that scale</h1>

        <div class="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            Web development technologies have evolved at an incredible clip over
            the past few years.
          </p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>It's a great solution for learning how other frameworks work.</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <button class="btn btn-sm btn-primary">
                Post Comment
              </button>
            </div>
          </form>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
```

## 1.8 处理顶部导航链接
pages/layout/index.vue

```vue
<template>
  <div id="root">
    <!-- 1. header 部分 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
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
            <nuxt-link class="nav-link" to="/login">
              Sign in
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">
              Sign up
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
              <img
                class="user-pic"
                src1="http://toutiao.meiduo.site/FtNcS8sKFSYQbtBbd40eFTL6lAs_"
                src="https://www.baidu.com/img/dong_8ff048ec89a4c8b4d638def4ce4dafda.gif"
              />
              lpz999
            </nuxt-link>
          </li>
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
export default {
  name: "LayoutIndex",
};
</script>
```

## 1.9 处理导航链接高亮
pages/layout/index.vue
``` vue
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
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
              <img
                class="user-pic"
                src1="http://toutiao.meiduo.site/FtNcS8sKFSYQbtBbd40eFTL6lAs_"
                src="https://www.baidu.com/img/dong_8ff048ec89a4c8b4d638def4ce4dafda.gif"
              />
              lpz999
            </nuxt-link>
          </li>
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
export default {
  name: "LayoutIndex",
};
</script>

```

## 1.10 封装请求模块
安装 axios：
```js
npm i axios 
```

utils/request.js
``` js
import axios from 'axios'
const request = axios.create({
baseURL: 'https://conduit.productionready.io/'
})
export default request
```

## 1.11 登录注册
### 1.11.1 定义登录和注册的接口
api/user
``` js
import { request } from "@/utils/request";
// 用户登录
export const login = (data) => {
    return request({
        method: "POST",
        url: "/api/users/login",
        data
    });
}
// 用户注册
export const register = (data) => {
    return request({
        method: "POST",
        url: "/api/users",
        data
    });
}
```
### 1.11.2 存储用户登录状态
``` js
// store/index
// 在服务端引入 cookie 解析的包
const cookieParser = process.server ? require("cookieparser") : undefined;
// state
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把 state 定义成一个函数
// 返回数据对象
export const state = () => {
    return {
        user: null,
    }
}
// 同步修改 state
export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
}
// 异步修改 state
export const actions = {
    // 这个特殊的 action(nuxtServerInit) 仅在服务端执行
    // 作用：初始化容器以及需要传递给客户端的数据     (服务端向客户端传递数据)
    // 第一个参数是上下文对象，第二个参数是拿到服务端的数据，例如：req请求对象
    nuxtServerInit({ commit }, { req }) {
        console.log("nuxtServerInit服务端执行");
        let user = null;
        // 请求头中有 Cookie
        if (req.headers.cookie) {
            // 将 cookie 字符串解析成 js 对象
            const parser = cookieParser.parse(req.headers.cookie);
            try {
                user = JSON.parse(parser.user);
            } catch (err) {

            }
        }
        // 提交 mutation 修改 state 状态
        commit("setUser", user);
    }
}
```

### 1.11.3 登录实现
pages/login
``` vue
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
              <li v-for="(message,index) in messages" :key="index">{{field}}{{ message}}</li>
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
  name: "LoginPage",
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
        const { user } = data.data;
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
```
### 1.11.4 身份验证(JWT)
[身份验证](https://zh.nuxtjs.org/examples/auth-external-jwt)

### 1.11.5 数据持久化
将用户登录的状态存到 cookie 中，每次请求的时候都会带上这个 cookie
``` js
async loginIn() {
    //  1. 提交表单请求登录
    try {
      const data = await (this.isLogin ? login : register)({
        user: { ...this.user },
      });
      // 2. 保存用户的登录状态
      const { user } = data.data;
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
}
```
在页面刷新的时候，服务端渲染的时候，将cookie再重新保存到客户端
``` js
// 在服务端引入 cookie 解析的包
const cookieParser = process.server ? require("cookieparser") : undefined;

// state
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把 state 定义成一个函数
// 返回数据对象
export const state = () => {
    return {
        user: null,
    }
}
// 同步修改 state
export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
}
// 异步修改 state
export const actions = {
    // 这个特殊的 action(nuxtServerInit) 仅在服务端执行
    // 作用：初始化容器以及需要传递给客户端的数据     (服务端向客户端传递数据)
    // 第一个参数是上下文对象，第二个参数是拿到服务端的数据，例如：req请求对象
    nuxtServerInit({ commit }, { req }) {
        console.log("nuxtServerInit服务端执行", req.headers);
        let user = null;
        // 请求头中有 Cookie
        if (req.headers.cookie) {
            // 将 cookie 字符串解析成 js 对象
            const parser = cookieParser.parse(req.headers.cookie);
            try {
                user = JSON.parse(parser.user);
            } catch (err) {

            }
        }
        // 提交 mutation 修改 state 状态
        commit("setUser", user);
    }
}

```

### 1.11.6 处理页面访问权限
为登录只能访问一部分页面，如果访问其他页面就直接重定向到登录页面
- 通过 middleware 中间件事件  
  - 客户端或者服务端都会拦截
  - 处理页面导航之间的拦截

- 创建中间件
``` js
/**
 * 验证是否登录的中间件
 * @param {*} context   上下文对象
 */
export default function (context) {
    const { store, redirect } = context;
    // 未登录重定向到 login 页面
    if (!store.state.user) {
        return redirect("/login");
    }
}
```
- 使用中间件的几种方式
  - nuxt.config.js
  ``` js
  // nuxt.config.js
  module.exports = {
    router: {
      middleware: "auth",  // 使用aut中间件
    }
  }
  ```
  - layouts 
  - pages
  ``` js
  export default {
    middleware: "auth", // 使用中间件控制权限
    name: "LoginPage",
  }
  ```


中间件执行流程顺序：
- nuxt.config.js
- 匹配布局
- 匹配页面
中间件可以异步执行,只需要返回一个 Promise 或使用第 2 个 callback 作为第一个参数：
``` js
// middleware/stats.js
import axios from 'axios'
export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```


## 1.12 首页模块
### 1.12.1 展示公共文章列表
封装请求方法：
``` js
import request from '@/utils/request'
// 获取文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}
```
获取数据
``` js
// asyncData 服务端和客户端都会执行的，这里渲染的数据有利于 SEO 的
async asyncData() {
  const { data } = await getArticles();
  const { articles, articlesCount } = data;
  return {
    articles, // 文章列表
    articlesCount, // 文章列表总条数
  };
  console.log(data);
  // return data;
},
```

模板绑定：
``` vue
<!-- 文章列表数据 -->
<template>
<div v-for="article in articles" :key="article.slug" class="article-preview">
    <div class="article-meta">
      <nuxt-link
        :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }"
      >
        <img :src="article.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link
          class="author"
          :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }"
        >{{article.author.username}}</nuxt-link>
        <span class="date">{{article.createdAt}}</span>
      </div>
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="article.favorited"
      >
        <i class="ion-heart"></i>
        {{article.favoritesCount}}
      </button>
    </div>
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }"
      class="preview-link"
    >
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
    </nuxt-link>
  </div>
</div>
</tempate>
```

### 1.12.2 分页处理
处理分页参数
``` js
// asyncData 服务端和客户端都会执行的，这里渲染的数据有利于 SEO 的
// 参数 context 上下文对象
async asyncData({ query }) {
  // 1. 获取当前页码 默认1
  const page = Number.parseInt(query.page || 1);
  // 2. 初始化每页显示条数
  const limit = 20;
  // 3. 设置偏移量
  const offset = (page - 1) * limit;
  // 4. 查询数据
  const { data } = await getArticles({
    limit,
    offset,
  });
  const { articles, articlesCount } = data;
  console.log(articles.length);
  return {
    articles, // 文章列表
    articlesCount, // 文章列表总条数
  };
},
```
### 1.12.3 页码处理
分页模板：
``` vue
<template>
<nav>
<ul class="pagination">
  <li class="page-item active">
  <nuxt-link
    class="page-link"
    to="/"
  >1</nuxt-link>
  </li>
  </ul>
</nav>
</template>
```

1. 使用计算属性计算总页码

``` js
totalPage () {
  return Math.ceil(this.articlesCount / this.limit)
}
```

2. 遍历生成页码列表
3. 设置导航链接
``` vue
<template>
<!-- start 页码处理 -->
    <nav>
      <ul class="pagination">
        <li
          v-for="item in totalPage"
          :key="item"
          class="page-item"
          :class="{
          active: item === page
        }"
        >
          <nuxt-link
            class="page-link"
            :to="{
            name:'home',
            query: {
              page: item
            }
          }"
          >{{item}}</nuxt-link>
        </li>
      </ul>
    </nav>
<!-- end 页码处理 -->
</template>
```

4. 响应 query 参数的变化
``` js
// 当 query 为 page参数时触发 asyncData 方法
// http://localhost:3000/?page=3 触发
watchQuery: ['page'],
```


### 1.12.4 展示文章标签列表
（1）封装接口请求方法
``` js
import { request } from "@/utils/request";
// 1. 获取文章标签列表
export const getTags = () => {
    return request({
        method: 'GET',
        url: '/api/tags',
    })
}
```
(2) 页面模板
``` vue
<template>
<!-- start 文章标签列表 -->
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>
      <div class="tag-list">
        <a href class="tag-pill tag-default">programming</a>
        <a href class="tag-pill tag-default">javascript</a>
        <a href class="tag-pill tag-default">emberjs</a>
        <a href class="tag-pill tag-default">angularjs</a>
        <a href class="tag-pill tag-default">react</a>
        <a href class="tag-pill tag-default">mean</a>
        <a href class="tag-pill tag-default">node</a>
        <a href class="tag-pill tag-default">rails</a>
      </div>
    </div>
  </div>
<!-- end 文章标签列表 -->
</template>
```
(3) 遍历生成标签列表
``` vue
<template>
<!-- start 文章标签列表 -->
<div class="col-md-3">
  <div class="sidebar">
    <p>Popular Tags</p>
    <div class="tag-list">
      <nuxt-link
        v-for="tag in newTags"
        :key="tag"
        :to="{
          name:'home',
          query: {
            tag: tag
          }
        }"
        class="tag-pill tag-default"
      >{{tag}}</nuxt-link>
    </div>
  </div>
</div>
<!-- end 文章标签列表 -->
</template>
```
(4) 优化并行任务
``` js
// asyncData 服务端和客户端都会执行的，这里渲染的数据有利于 SEO 的
// 参数 context 上下文对象
async asyncData({ query }) {
  // 1. 获取当前页码 默认1
  const page = Number.parseInt(query.page || 1);
  // 2. 初始化每页显示条数
  const limit = 20;
  // 3. 设置偏移量
  const offset = (page - 1) * limit;
  // 4. 获取文章列表数据
  // const { data } = await getArticles({
  //   limit,
  //   offset,
  // });
  // 5. 获取文章标签列表
  // const { data: tagsData } = await getTags();
  // 6. 优化并行任务: 将获取文章列表数据和文章标签列表数据一起请求
  const [articlesRes, tagsRes] = await Promise.all([
    getArticles({
      limit,
      offset,
    }),
    getTags(),
  ]);
  const { articles, articlesCount } = articlesRes.data; // 解构文章列表的数据
  const { tags } = tagsRes.data; // 解构文章标签列表的数据
  return {
    articles, // 文章列表
    articlesCount, // 文章列表总条数
    page, // 当前页码
    limit, // 每页显示多少条
    tags, // 文章标签列表
  };
},
```

### 1.12.5 展示用户关注的文章列表
(1) 封装接口请求方法
``` js
// 2. 获取你关注的用户的文章列表
// 必须已认证，也就是要传token
export const getYourFavoriteArticle = () => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        headers: {
            // 添加用户身份，数据格式：Token Token数据
            Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEzMDMwLCJ1c2VybmFtZSI6Imx5a2EzMTU2IiwiZXhwIjoxNjA0NTgwMjU2fQ.6gRJr-2Jyv3-qYXF73IEFVdt7io0Aodugt42YZ2XKOY`
        }
    })
}
```
(2) 页面模板
``` vue
<template>
<!-- start 选项卡列表 -->
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <!-- 登录了才有Your Feed  也就是你关注的用户发布的文章列表 -->
      <li v-if="user" class="nav-item">
        <nuxt-link
          class="nav-link"
          :class="{
            active: tab === 'your_feed'
          }"
          exact
          :to="{
          name: 'home',
          query: {
            tab: 'your_feed'     // 选项卡选中your_feed
          }
        }"
        >Your Feed</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link
          class="nav-link"
          :class="{
            active: tab === 'global_feed'
          }"
          exact
          :to="{
          name: 'home',
          query: {
              tab: 'global_feed', // 选项卡选中global_feed
          }
        }"
        >Global Feed</nuxt-link>
      </li>
      <li v-if="tag" class="nav-item">
        <nuxt-link
          class="nav-link"
          :class="{
            active: tab === 'tag_feed'
          }"
          exact
          :to="{
          name: 'home',
          query: {
            tab: 'tag_feed', // 选项卡选中tag_feed    
            tag: tag
          }
        }"
        ># {{tag}}</nuxt-link>
      </li>
    </ul>
  </div>
  <!-- end 选项卡列表 -->
</template>
```
(3) 获取用户关注的文章列表
``` js
// asyncData 服务端和客户端都会执行的，这里渲染的数据有利于 SEO 的
  // 参数 context 上下文对象
  async asyncData({ query }) {
    // 1. 获取url传递的数据
    // 1.1 当前页码 默认1
    const page = Number.parseInt(query.page || 1);
    // 1.2 刷选的标签名
    const tag = query.tag;
    // 1.3 导航的标签栏 没有tab，默认就是Global Feed 激活
    const tab = query.tab || "global_feed";
    // 2. 初始化每页显示条数
    const limit = 20;
    // 3. 设置偏移量
    const offset = (page - 1) * limit;
    // 4. 获取文章列表数据
    // const { data } = await getArticles({
    //   limit,
    //   offset,
    // });
    // 5. 获取文章标签列表
    // const { data: tagsData } = await getTags();
    // 6. 优化并行任务: 将获取文章列表数据和文章标签列表数据一起请求
    // loadArticles: 是调用你关注的文章列表还是公共的文章列表
    const loadArticles =
      tab === "your_feed" ? getYourFavoriteArticle : getArticles;
    const [articlesRes, tagsRes] = await Promise.all([
      loadArticles({
        limit,
        offset,
        tag,
      }),
      getTags(),
    ]);
    const { articles, articlesCount } = articlesRes.data; // 解构文章列表的数据
    const { tags } = tagsRes.data; // 解构文章标签列表的数据
    return {
      articles, // 文章列表
      articlesCount, // 文章列表总条数
      page, // 当前页码
      limit, // 每页显示多少条
      tags, // 文章标签列表
      tag, // 选择的标签名
      tab, // 选择的选项卡
    };
},
```
(4) 统一设置用户 Token
[使用插件](https://zh.nuxtjs.org/guide/plugins)
在插件里plugins里面定义request.js文件，这样可以拿到context上下文
``` js
// 1. 定义插件
// plugins/request
import axios from 'axios'
/**
 * 基于 axios 封装的请求模块
 */

// 1. 创建 axios 实例
export const request = axios.create({
    baseURL: "http://realworld.api.fed.lagounews.com"
    // baseURL: 'https://conduit.productionready.io/'      // 公共前缀路劲
})

// 导出一个plugin插件，这里面才能拿到store.state
// 通过插件机制获取到上下文对象 （query,params,req,res,app,store）
export default (context) => {
    const { store } = context;
    // 2. 请求拦截器
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理
    // 例如：统一设置 token
    request.interceptors.request.use(config => {
        // 请求会经过这里
        const { user } = store.state;
        // 添加用户身份，数据格式：Token Token数据
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`;
        }
        // 返回 config 请求配置对象
        return config;
    }, error => {
        // 如果请求失败，此时请求还没有发出去，就会进入这里
        return Promise.reject(error);
    })
}

// 3. 响应拦截器
// https://juejin.im/post/6844903652881072141
request.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response && response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        return Promise.reject(error);
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
);
// 2. 注册插件
// nuxt.config.js
plugins: [
  "~/plugins/request.js",  // 注册插件，在插件里有个上下文对象   处理request
],
```
(5) 文章发布时间格式化处理
[day.js](https://day.js.org/docs/en/display/format)
在插件里plugins里面定义day.js文件，
``` js
// 1. 定义插件
// plugins/dayjs
import Vue from "vue";
import dayjs from "dayjs";

/**
 * 定义全局过滤器来格式化时间
 */

// {{ 表达式 | 过滤器 }}
// 使用例子： {{ createAt | date("YYYY-MM-DD") }}
// 第一个参数是过滤器的名称
// 第二个参数是处理函数
//     - 第二个参数的第一个参数是表达式
//     - 第二个参数的第第一个参数后面的参数的过滤器的参数
Vue.filter('date', (value, format = "YYYY-MM-DD HH:mm:ss") => {
    return dayjs(value).format(format);
}) 

// 2. 注册插件
// nuxt.config.js
plugins: [
   "~/plugins/dayjs.js"  // 注册插件，在插件里有个上下文对象     处理date
],
```

### 1.12.5 文章点赞
(1) 页面模板
``` js
<button
  class="btn btn-outline-primary btn-sm pull-xs-right"
  :class="{
    active: article.favorited
  }"
  @click="handleFavorite(article)"
  :disabled="article.favoritedDisable"
>
  <i class="ion-heart"></i>
  {{article.favoritesCount}}
</button>
```
(2) 功能实现
``` js
// 1. 在 asyncData 中
// 为data中的articles添加favoritedDisable属性，实现数据响应式变化
articles.forEach((art) => (art.favoritedDisable = false));

// 2. 在 methods 方法中实现
methods: {
  async handleFavorite(article) {
    article.favoritedDisable = true; // 已经点过了就禁用，防止重复点击
    // 已点赞就取消点赞
    if (article.favorited) {
      article.favoritesCount -= 1;
      article.favorited = false;
      await deleteFavorite(article.slug);
    } else {
      // 添加点赞
      article.favoritesCount += 1;
      article.favorited = true;
      await addFavorite(article.slug);
    }
    article.favoritedDisable = false; // 当借口请求完成才取消禁用
  },
},
```

## 1.13 文章详情
### 1.13.1 展示基本信息
页面模板
``` js
<div class="container page">
  <div class="row article-content">
  <div class="col-md-12">{{article.body}}</div>
</div>
```
获取数据
``` js
import { getAtricleBySlug } from "@/api/article";
export default {
  middleware: "authorization", // 使用authorization中间件
  async asyncData({ params, store }) {
    const data = await getAtricleBySlug(params.slug);
    const { article } = data;
    // 1. 将markdown转为html
    // 1.1 创建 markdown实例
    const md = new MarkdownIt();
    // 1.2 将 markdown 转换为 html
    article.body = md.render(article.body);
    console.log(article);
    return {
      article,
    };
  },
};
```

### 1.13.2 把Markdown转为HTML
页面模板
``` js
<div class="container page">
  <div class="row article-content">
  <div class="col-md-12" v-html="article.body"></div>
</div>
```
获取数据
```js
import { getAtricleBySlug } from "@/api/article";
import MarkdownIt from "markdown-it"; // 将markdown转为html
export default {
  middleware: "authorization", // 使用authorization中间件
  async asyncData({ params, store }) {
    const data = await getAtricleBySlug(params.slug);
    const { article } = data;
    // 1. 将markdown转为html
    // 1.1 创建 markdown实例
    const md = new MarkdownIt();
    // 1.2 将 markdown 转换为 html
    article.body = md.render(article.body);
    console.log(article);
    return {
      article,
    };
  },
};
```

### 1.13.3 展示文章作者相关信息
``` js
// article/components/article-meta
<!-- 文章相关的元数据   -->
<template>
  <div class="article-meta">
    <!-- <div class="article-meta">{{JSON.stringify(article)}}</div> -->
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
            username: article.author.username
        }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
        name: 'profile',
        params: {
            username: article.author.username
        }
    }"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createAt | date("MMM DD, YYYY")}}</span>
    </div>
    <!-- 关注作者 -->
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: articel ?  articel.author.following : false
        }"
    >
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <!-- 关注文章 -->
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
            active: articel ?  articel.favorited : false
        }"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite Post
      <span class="counter">(29)</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ArticleMeta",
  props: {
    // 对象类型，必填
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
```

### 1.13.4 设置页面 meta 优化 SEO
``` js
//  页面中设置网页 head 信息
head() {
  return {
    title: `${this.article.title} - RealWorld`,
    meta: [
      {
        hid: "description", // hid 就是唯一标识符号
        name: "description",
        content: this.article.description,
      },
    ],
  };
},
```




## 1.14 发布文章

## 1.15 用户中心

## 1.16 个人中心

## 1.17 开发部署
