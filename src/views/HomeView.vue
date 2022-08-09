<template>
  <div class="home">
    <HomeHeader />
    <PostBox @edit="editPost" :sinal="sinal" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterModal from "@/components/Home/RegisterModal.vue";
import EditModal from "@/components/Home/EditModal.vue";
import HomeHeader from "@/components/Home/HomeHeader.vue";
import PostBox from "@/components/Home/PostBox.vue";
@Component({
  components: {
    HomeHeader,
    PostBox,
    RegisterModal,
    EditModal,
  },
})
export default class HomeView extends Vue {
  currentPost = {};
  edit = false;
  sinal = false;
  editPost(value: object): void {
    this.currentPost = value;
    this.edit = true;
  }
}
</script>

<style lang="scss">
.home {
  z-index: 1;
}
.leave {
  animation-name: leave;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes leave {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 50%;
  }
}
</style>
