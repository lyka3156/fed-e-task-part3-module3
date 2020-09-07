<!-- 文章评论组件 -->
<template>
  <div>
    <!-- start 添加评论信息 -->
    <form class="card comment-form" @submit.prevent="handleSubmit">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="comment.body"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
    <!-- end 添加评论信息 -->

    <!-- start 评论信息列表 -->
    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img
            :src="comment.author.image"
            class="comment-author-img"
          /> </nuxt-link
        >&nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
          >{{ comment.author.username }}</nuxt-link
        >
        <span class="date-posted">{{
          comment.createdAt | date("MMMM DD, YYYY")
        }}</span>
        <!-- ng-show="$ctrl.canModify" -->
        <span class="mod-options">
          <i class="ion-trash-a" @click="deleteComment(comment.id)"></i>
        </span>
      </div>
    </div>
    <!-- end 评论信息列表 -->
  </div>
</template>

<script>
import { getComments, addComments, deleteComments } from "@/api/article";
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
      comment: {}, // 添加评论的对象
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
  methods: {
    // 处理添加评论的表单数据
    async handleSubmit() {
      // 未输入数据不做处理
      if (this.comment.body === "") return;
      // 后台中添加评论
      const { comment } = await addComments(this.article.slug, {
        ...this.comment,
      });
      this.comments.unshift(comment); // 在最前面添加一项
      this.comment.body = ""; // 清空文本域中的值
    },
    // 删除评论
    async deleteComment(id) {
      // 后台中删除评论
      await deleteComments(this.article.slug, id);
      // 前端过滤掉删除掉的数据
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
};
</script>
