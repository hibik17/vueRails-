import { createApp } from "vue";
import App from "../app.vue";
import { router } from "../routes.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLeaf);

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.component("fa", FontAwesomeIcon);
  app.use(router);
  app.mount("#vue-app");
});
