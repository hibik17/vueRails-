import { createApp } from "vue";
import App from "../app.vue";
import { router } from "../routes.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
});
