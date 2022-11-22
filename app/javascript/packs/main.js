import { createApp } from "vue";
import App from "../app.vue";
import { router } from "../routes.js";
import Vue from "vue";
import VueRouter from "vue-router";

document.addEventListener("DOMContentLoaded", () => {
  app.use(router);
  const app = createApp(App);
  app.mount("#vue-app");
});
