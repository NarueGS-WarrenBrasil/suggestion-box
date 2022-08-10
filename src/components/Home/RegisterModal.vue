<template>
  <div class="post" v-show="show">
    <fa-icon class="x" @click="close" icon="fa-solid fa-xmark fa-2xl" />
    <p>
      <input
        id="author"
        class="post-author"
        placeholder="Seu nome"
        v-model="newSuggestion.author"
      />
      <input
        class="author-age"
        placeholder="idade"
        type="number"
        min="1"
        v-model="newSuggestion.age"
      />
    </p>
    <div class="post-content-score-box">
      <p>
        <input
          type="number"
          min="0"
          max="10"
          class="post-score"
          placeholder="nota"
          v-model="newSuggestion.score"
        />
      </p>
      <div>
        <textarea class="content" v-model="newSuggestion.content" />
      </div>
    </div>
    <button @click="creatSuggestion">Confirmar</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import axios from "axios";
const date = new Date();

@Component({})
export default class RegisterModal extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  public show!: boolean;
  private newSuggestion = {
    author: "",
    age: "",
    score: "",
    content: "",
    hour: date.getHours(),
    day: date.getDay(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
    comments: [],
  };
  @Emit("registered")
  public getComments() {
    return;
  }
  async creatSuggestion(): Promise<void> {
    try {
      const res = axios.post(`http://localhost:3001/posts`, this.newSuggestion);
      this.close();
    } catch (err) {
      console.error();
    }
  }
  close() {
    this.$emit("close");
  }
}
</script>

<style lang="scss" scoped>
.post {
  animation-name: letsStart;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  background-color: rgb(255, 37, 91);
  height: auto;
  text-align: left;
  border-radius: 15px;
  box-sizing: content-box;
  padding: 1rem 1.5rem 1rem 1.5rem;
  position: fixed;
  box-shadow: 0 0 0 1000vw rgba(0, 0, 0, 0.517);
  .x {
    margin-left: 100%;
    color: white;
    cursor: pointer;
  }
}
.post-author {
  animation-name: authorStart;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  background-color: white;
  padding: 0.5em;
  margin-right: 1vw;
  font-size: 1.5rem;
  border-radius: 12px;
}
.author-age {
  background-color: white;
  padding: 0.5em;
  margin-right: 1vw;
  font-size: 1.5rem;
  border-radius: 12px;
  width: 10%;
}
.post-content-score-box {
  width: 97%;
  height: auto;
  min-height: 32vh;
  max-height: 40.5vh;
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2vh;
  p {
    background-color: bisque;
    text-align: center;
    border: solid rgb(255, 187, 0) 1px;
    border-radius: 12px;
    width: auto;
    max-width: 6em;
    padding: 0.5rem;
    input {
      width: 80%;
      font-size: 120%;
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      border: none;
      outline: none;
    }
  }
  div {
    .content {
      outline: none;
      width: 96%;
      max-height: 30vh;
      min-height: 20vh;
      padding: 1rem;
      font-size: clamp(1rem, 1vw + 1vh, 4em);
    }
  }
}

@keyframes letsStart {
  from {
    width: 30%;
    margin: 20vh 0 0vh 80%;
  }
  to {
    width: 50%;
    margin: -50vh 0 0vh 24%;
  }
}
@keyframes authorStart {
  from {
    width: 10%;
  }
  to {
    width: 50%;
  }
}
</style>
