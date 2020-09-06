<!-- Article 文章详情 -->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>How to build webapps that scale</h1>
        <!-- 使用组件 -->
        <article-meta :article="article" />
      </div>
    </div>

    <!-- start 文章的正文 -->
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>
      <!-- end 文章的正文 -->

      <hr />

      <div class="article-actions">
        <!-- 使用组件 -->
        <article-meta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <!-- 文章评论 -->
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAtricleBySlug } from "@/api/article";
import MarkdownIt from "markdown-it"; // 将markdown转为html
import ArticleMeta from "./components/article-meta"; // 引入组件
import ArticleComments from "./components/article-comments"; // 引入组件
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
    console.log(article, 22222222222);
    return {
      article,
    };
  },
  components: {
    // 注册组件
    ArticleMeta,
    ArticleComments,
  },
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
};
</script>
