import { createApp } from "vue";
import App from "../app.vue";
import { router } from "../routes";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.mount("#vue-app");
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
