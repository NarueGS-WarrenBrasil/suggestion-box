<template>
  <div class="post-box">
    <div @click="toSuggest" class="newComment">
      <fa-icon class="new" icon="fa-solid fa-message" />
    </div>
    <RegisterModal
      :show="register"
      id="modal"
      @close="closeRegister"
      @registered="getComments"
    />
    <EditModal
      v-show="edit"
      :currentSuggestion="editData"
      @edited="getComments"
      @close="closeEdit"
    />
    <CommentModal
      :post="commentData"
      @close="closeComment"
      v-show="comment"
      id="comment"
    />
    <DetailModal
      @close="closeDetail"
      v-show="detail"
      :suggestion="detailData"
    />
    <div v-for="p in postList" :key="p.id">
      <div class="post">
        <fa-icon class="more-buttom" icon="fa-solid fa-ellipsis" />
        <div ref="op" class="more-options">
          <li class="option" @click="editPost(p)">editar</li>
          <li class="option" @click="deletePost(p.id)">deletar</li>
          <a class="option" href="#" @click="detailSuggestion(p)">detalhes</a>
        </div>
        <p>
          <span class="post-author">{{ p.author }}</span>
        </p>
        <div class="post-content-score-box">
          <p>
            <span class="post-score">{{ p.score }}</span>
          </p>
          <div>
            <span>{{ p.content }}</span>
          </div>
        </div>
        <div @click="toComment(p)" class="comment-bottom">
          <fa-icon icon="fa-solid fa-comment-dots" />
          {{ p.comments.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import suggestionService from "@/services/suggestionService";
import RegisterModal from "./RegisterModal.vue";
import EditModal from "./EditModal.vue";
import CommentModal from "./CommentModal.vue";
import DetailModal from "./DetailModal.vue";

@Component({
  components: {
    RegisterModal,
    EditModal,
    CommentModal,
    DetailModal,
  },
})
export default class PostBox extends Vue {
  postList = [];
  register = false;
  comment = false;
  detail = false;
  edit = false;
  deleted = "";
  editData = {};
  commentData = {};
  detailData = {};
  async created(): Promise<void> {
    this.getComments();
  }
  async getComments() {
    try {
      const res = await suggestionService.get();
      this.postList = res.data;
    } catch (e) {
      console.error(e);
    }
  }
  async deletePost(id: number): Promise<void> {
    try {
      suggestionService.delete(id);
      this.getComments();
    } catch (e) {
      console.error(e);
    }
  }
  toSuggest(): void {
    this.register = true;
  }
  editPost(sugg: object) {
    this.edit = true;
    this.editData = sugg;
  }
  closeEdit() {
    this.edit = false;
  }
  @Watch("sinal")
  openRegister() {
    this.register = true;
  }
  closeRegister() {
    this.register = false;
  }
  toComment(sugg: object) {
    this.commentData = sugg;
    this.comment = true;
  }
  closeComment() {
    this.comment = false;
  }
  detailSuggestion(sugg: object) {
    this.detailData = sugg;
    this.detail = true;
  }
  closeDetail() {
    this.detail = false;
  }
}
</script>

<style lang="scss" scoped>
.post-box {
  width: 100%;
  height: auto;
}
.more-options {
  opacity: 0%;
  width: auto;
  a {
    text-decoration: none;
    color: white;
  }
  .option {
    padding-left: 0.2vw;
    background-color: rgb(0, 0, 54);
    border-radius: 0.5rem;
    padding: 0.2rem;
    cursor: pointer;
  }
  .option:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 54);
  }
  list-style: none;
  margin-left: 25vw;
  float: right;
  text-align: left;
  height: auto;
  position: absolute;
  color: white;
  opacity: 0%;
}
.more-options:hover {
  opacity: 100%;
}
.show {
  animation-name: show;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes show {
  from {
    opacity: 0%;
    margin-bottom: 1vh;
  }
  to {
    opacity: 100%;
    margin-bottom: 0vh;
  }
}
.post {
  background-color: rgb(255, 37, 91);
  width: 30vw;
  height: auto;
  text-align: left;
  border-radius: 15px;
  box-sizing: content-box;
  margin: 5vh 0 5vh 34%;
  padding: 1vh 1.5vw 1vh 1.5vw;
  z-index: 1;
  .more-buttom {
    float: right;
    width: 5vw;
    height: 5vh;
  }
  .more-buttom:hover {
    color: rgb(255, 137, 137);
  }
}
.post-author {
  background-color: white;
  width: auto;
  padding: 0.5em;
  font-size: calc(0.8vw + 0.8vh);
  border-radius: 12px;
  bottom: 12vh;
  top: 12vh;
}
.post-content-score-box {
  width: 94.2%;
  height: auto;
  max-height: 32vh;
  font-size: calc(1vw + 1vh);
  background-color: white;
  border-radius: 12px;
  padding: 0 1vw 2vh 1vw;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2vh;
  word-break: break-word;
  p {
    background-color: bisque;
    width: 2em;
    text-align: center;
    border: solid rgb(244, 212, 125) 1px;
    border-radius: 12px;
  }
  div {
    font-size: 120%;
  }
}
.comment-bottom {
  width: auto;
  max-width: 3rem;
  min-width: 1rem;
  padding: 4px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  border: solid rgba(0, 0, 0, 0) 0.1rem;
}
.comment-bottom:hover {
  border: solid rgb(0, 0, 0) 0.1rem;
}
.newComment {
  margin-left: 80vw;
  margin-top: 10%;
  position: fixed;
  a {
    color: rgb(0, 0, 0);
    font-style: none;
  }
  .new {
    width: 3.5vw;
    height: 3.5vh;
    padding: 0.5rem 0.1rem 0.5rem 0.1rem;
    cursor: pointer;
  }
}
.true {
  animation-name: del;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes del {
  from {
    margin-left: 34%;
    opacity: 100%;
  }
  to {
    margin-left: 17%;
    opacity: 10%;
  }
}
</style>
