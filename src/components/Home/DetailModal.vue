<template>
  <div class="suggestion-box">
    <fa-icon class="x" @click="close" icon="fa-solid fa-xmark fa-2xl" />
    <div class="top">
      <span id="author" class="normal">{{ suggestion.author }}</span>
      <span id="score" class="normal">
        experiência Warren:
        {{ suggestion.score }}
      </span>
    </div>
    <div class="middle">
      <span>dia: {{ suggestion.day }}</span>
      <span>mês: {{ suggestion.mounth }}</span>
      <span>ano: {{ suggestion.year }}</span>
    </div>
    <div class="content">{{ suggestion.content }}</div>
    <div
      v-for="comment in suggestion.comments"
      :key="comment.id"
      class="comments-box"
    >
      <span>{{ comment.commentator }}</span>
      <hr />
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import { ISuggestion } from "@/interfaces/index";
@Component({})
export default class DatailModal extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  public suggestion!: ISuggestion;

  @Emit("close")
  public closeDetail() {
    return;
  }
  close(): void {
    this.closeDetail();
  }
  created() {
    console.log("a");
  },
}
</script>

<style lang="scss" scoped>
.suggestion-box {
  background-color: rgb(255, 37, 91);
  width: 50%;
  min-height: 32vh;
  height: auto;
  text-align: left;
  border-radius: 15px;
  box-sizing: content-box;
  padding: 1rem 1.5rem 2rem 1.5rem;
  margin: -30vh 0 5vh 23%;
  position: absolute;
  box-shadow: 0 0 0 1000vw rgba(0, 0, 0, 0.517);
  z-index: 1;
  .x {
    margin-left: 100%;
    color: white;
    cursor: pointer;
  }
}
.normal {
  background-color: white;
  padding: 0.5em;
  float: left;
  margin-right: 1vw;
  font-size: 1.5rem;
  border-radius: 12px;
  width: auto;
  position: absolute;
}
#score {
  background-color: bisque;
  font-size: calc(0.7vw + 0.7vh);
  margin-top: 8vh;
  position: absolute;
}
#author {
  min-width: 12vw;
}
#text {
  margin-top: 12vh;
}
.middle {
  background-color: white;
  padding: 0.5em;
  float: right;
  margin-right: 1vw;
  font-size: 1.5rem;
  border-radius: 12px;
  width: auto;
  span {
    margin-left: 1rem;
  }
}
.content {
  min-width: 80%;
  height: auto;
  background-color: white;
  padding: 0.5em;
  font-size: calc(1vw + 1vh);
  border-radius: 12px;
  margin-top: 15vh;
  margin-bottom: 5vh;
  word-break: break-all;
}

.comments-box {
  background-color: white;
  width: auto;
  max-width: 60%;
  padding: 0.5rem;
  margin: 1rem 0 0 0;
  border-radius: 12px;
  span {
    border: solid rgba(129, 129, 129, 0.463) 0.1px;
    border-radius: 12px;
    padding: 0.2rem;
  }
  p {
    width: auto;
  }
}
</style>
