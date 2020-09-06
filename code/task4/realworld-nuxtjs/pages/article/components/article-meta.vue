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
    <button class="btn btn-sm btn-outline-secondary">
      <!-- :class="{
       // active: articel ?  articel.author.following : false
      }"-->
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <!-- 关注文章 -->
    <button class="btn btn-sm btn-outline-primary">
      <!-- :class="{
          //  active: articel ?  articel.favorited : false
      }"-->
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