import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Maska from "maska";
Vue.use(Maska);
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCommentDots,
  faMessage,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCommentDots, faMessage, faXmark, faEllipsis);
Vue.component("fa-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
