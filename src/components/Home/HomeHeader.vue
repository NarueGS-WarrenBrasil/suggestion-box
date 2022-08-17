<template>
  <nav class="header">
    <NavBar />
    <div class="header-title">
      <div class="main-title">
        <span>Caixa de sujestões</span>
      </div>
      <span class="sub-title">Onde sua opinião vale mais</span>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "./NavBar.vue";
@Component({
  components: {
    NavBar,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  animation-name: carousel;
  animation-duration: infinite;
  text-align: center;
  width: 100%;
  height: auto;
  max-height: 65vh;
  background-size: cover;
  background-position: center center;
  background-image: url("../../../public/navBackground.png");
  background-attachment: fixed;
  font-size: 230%;
  color: white;
}

.main-title {
  font-weight: 900;
  font-size: clamp(2rem, 2vw + 2vh, 6em);
  padding-top: 25vh;
}
.header-title {
  height: 75vh;
}
.sub-title {
  font-size: clamp(1rem, 1vw + 1vh, 4em);
}
</style>
