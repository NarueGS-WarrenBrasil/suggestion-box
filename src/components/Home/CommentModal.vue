<template>
  <div class="comment-box">
    <fa-icon class="x" @click="close" icon="fa-solid fa-xmark fa-2xl" />
    <input
      id="author"
      class="commentator"
      placeholder="Seu nome"
      v-model="comment.commentator"
    />
    <div>
      <textarea class="content" v-model="comment.text" />
    </div>
    <button @click="addComment(post.comments, comment, post.id, post)">
      Confirmar
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import commentService from "@/services/commentService";
@Component({})
export default class CommentModal extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  public post!: object;
  public comment = {
    commentator: "",
    text: "",
  };
  @Emit("registered")
  public getComments() {
    return;
  }
  @Emit("close")
  public closeComment() {
    return;
  }
  close(): void {
    this.closeComment();
  }
  clean(): void {
    this.comment.commentator = "";
    this.comment.text = "";
  }
  async addComment(
    comments: object[],
    comment: object,
    id: number,
    target: object
  ): Promise<void> {
    try {
      commentService.add(comments, comment, id, target);
      this.clean();
      this.closeComment();
    } catch (err) {
      console.error(err);
    } finally {
      window.location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-box {
  background-color: rgb(255, 37, 91);
  width: 30%;
  height: auto;
  text-align: left;
  border-radius: 15px;
  box-sizing: content-box;
  margin: -30vh 0 5vh 34%;
  padding: 1rem 1.5rem 1rem 1.5rem;
  position: fixed;
  box-shadow: 0 0 0 1000vw rgba(0, 0, 0, 0.517);
  z-index: 1;
  .x {
    margin-left: 100%;
    color: white;
    cursor: pointer;
  }
  .content {
    width: 97%;
    height: 20vh;
    border: none;
    padding: 0.5rem;
    font-size: calc(1vw + 1vh);
  }
  button {
    background-color: white;
    border: rgb(255, 255, 255) 1px solid;
    cursor: pointer;
  }
  button:hover {
    border: rgb(0, 0, 0) 1px solid;
  }
}
.commentator {
  background-color: white;
  padding: 0.5em;
  width: 50%;
  font-size: 1rem;
  border-radius: 2px;
  border: none;
  margin-bottom: 1vh;
}
</style>
