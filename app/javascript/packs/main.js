import { createApp } from "vue";
import App from "../app.vue";
import { router } from "../routes.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBook } from "@fortawesome/free-solid-svg-icons";
library.add(faBook);

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.use(router);
  app.mount("#vue-app");
});
