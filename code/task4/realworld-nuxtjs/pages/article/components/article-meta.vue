<!-- 文章相关的元数据   -->
<template>
  <div class="article-meta">
    <!-- <div class="article-meta">{{JSON.stringify(article)}}</div> -->
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
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
            username: article.author.username,
          },
        }"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createAt | date("MMMM DD, YYYY") }}</span>
    </div>
    <!-- 关注作者 -->
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following,
      }"
      @click="handleFollow(article)"
      :disabled="article.followingDisable"
    >
      <i class="ion-plus-round"></i>
      &nbsp; Follow {{ article.author.username }}
      <span class="counter">(10)</span>
    </button>
    <!-- 关注文章 -->
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited,
      }"
    >
      &gt;
      <i class="ion-heart"></i>
      &nbsp; Favorite Post
      <span class="counter">(29)</span>
    </button>
  </div>
</template>

<script>
import { followUser, unFollowUser } from "@/api/profile";
export default {
  name: "ArticleMeta",
  props: {
    // 对象类型，必填
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 关注获取取消用户
    handleFollow(article) {},
  },
};
</script>
