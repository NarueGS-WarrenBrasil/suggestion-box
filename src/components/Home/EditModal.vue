<template>
  <div class="post">
    <fa-icon class="x" @click="close" icon="fa-solid fa-xmark fa-2xl" />
    <p>
      <input
        id="author"
        class="post-author"
        placeholder="Nome completo"
        v-model="updatedSuggestion.author"
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
          v-model="updatedSuggestion.score"
        />
      </p>
      <div>
        <textarea class="content" v-model="updatedSuggestion.content" />
      </div>
    </div>
    <button @click="editSuggestion(updatedSuggestion.id, updatedSuggestion)">
      Editar
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
import suggestionService from "@/services/suggestionService";
@Component({})
export default class EditModal extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: {},
  })
  readonly currentSuggestion!: object;
  public show = false;
  public updatedSuggestion = {};

  @Watch("currentSuggestion")
  onChangeData() {
    this.updatedSuggestion = this.currentSuggestion;
    this.show = true;
  }
  @Emit("edited")
  public getComments() {
    return;
  }
  @Emit("close")
  public close() {
    return;
  }
  async editSuggestion(id: number, suggestion: object): Promise<void> {
    try {
      suggestionService.put(id, suggestion);
      this.close();
    } catch (e) {
      console.error(e);
    } finally {
      this.getComments();
    }
  }
}
</script>

<style lang="scss" scoped>
.post-box {
  width: 100%;
  height: auto;
}
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
  width: 1vw;
  font-size: 1.5rem;
  border-radius: 12px;
  bottom: 12vh;
  top: 12vh;
}
.post-content-score-box {
  width: 97%;
  height: auto;
  min-height: 32vh;
  max-height: 40.5vh;
  background-color: white;
  border-radius: 12px;
  padding-left: 1em;
  padding-top: 0.5em;
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
      width: 3vw;
      font-size: 120%;
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      border: none;
      outline: none;
    }
  }
  div {
    font-size: 150%;
    .content {
      outline: none;
      width: 95%;
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
    width: 1vw;
  }
  to {
    width: 20vw;
  }
}
</style>
