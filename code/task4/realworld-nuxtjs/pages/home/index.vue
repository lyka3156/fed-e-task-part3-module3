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

          <!-- 文章列表数据 -->
          <!-- 加载中 loading -->
          <div v-if="!articles" class="article-preview">Loading articles...</div>
          <!-- 无内容提示 -->
          <div
            v-if="articles && !articles.length"
            class="article-preview"
          >No articles are here... yet.</div>
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
                <span class="date">{{article.createdAt | date("MMM DD, YYYY")}}</span>
              </div>
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
        <!-- end 文章列表数据 -->

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
                  page: item,
                  tag: tag,
                  tab: tab
                }
              }"
              >{{item}}</nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- end 页码处理 -->

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
                    tag: tag,
                    tab: 'tag_feed', // 选项卡选中tag_feed
                  }
                }"
                class="tag-pill tag-default"
              >{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
        <!-- end 文章标签列表 -->
      </div>
    </div>
  </div>
</template>
<script>
import {
  getArticles,
  getYourFavoriteArticle,
  addFavorite,
  deleteFavorite,
} from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex";
export default {
  name: "HomeIndex",
  // asyncData 服务端和客户端都会执行的，这里渲染的数据有利于 SEO 的
  // 参数 context 上下文对象
  async asyncData({ query, store }) {
    // 1. 获取url传递的数据
    // 1.1 当前页码 默认1
    const page = Number.parseInt(query.page || 1);
    // 1.2 刷选的标签名
    const tag = query.tag;
    // 1.3 导航的标签栏 没有tab，默认就是Global Feed 激活
    // 如果用户没有登录就选择global_feed，否则就是用户选择的选项卡
    const tab =
      query.tab === "your_feed" && !store.state.user
        ? "global_feed"
        : query.tab || "global_feed";
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
    const { articles, articlesCount } = articlesRes; // 解构文章列表的数据
    const { tags } = tagsRes; // 解构文章标签列表的数据
    // 为data中的articles添加favoritedDisable属性，实现数据响应式变化
    articles.forEach((art) => (art.favoritedDisable = false));
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
  watchQuery: ["page", "tag", "tab"], // 当 query 为 page,tab,tag 时触发 asyncData 方法
  computed: {
    ...mapState(["user"]), // user 登录的状态
    // 获取总页码数
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    // 封装tag数据
    newTags() {
      // 'https://conduit.productionready.io/ 接口的数据前面10条是空白的
      return this.tags.slice(10, 25);
    },
  },
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
};
</script>
