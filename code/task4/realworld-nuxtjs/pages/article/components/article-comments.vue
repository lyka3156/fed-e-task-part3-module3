<!-- 文章评论组件 -->
<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>

    <!-- 评论信息 -->
    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
                username: comment.author.username
            }
        }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>&nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
                username: comment.author.username
            }
        }"
          class="comment-author"
        >{{comment.author.username}}</nuxt-link>
        <span class="date-posted">{{comment.createdAt | date("MMM DD, YYYY")}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments } from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "ArticleComments",
  props: {
    // 对象类型，必填
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [], // 文章列表
    };
  },
  // 组件挂载完成执行，不需要 SEO 的就在这里调用接口
  async mounted() {
    const data = await getComments(this.article.slug);
    this.comments = data.comments;
  },
  computed: {
    ...mapState(["user"]), // user 登录的状态
  },
};
</script>