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

## 1.10 封装请求模块

## 1.11 登录注册

## 1.12 首页模块

## 1.13 文章详情

## 1.14 发布文章

## 1.15 用户中心

## 1.16 个人中心

## 1.17 开发部署
