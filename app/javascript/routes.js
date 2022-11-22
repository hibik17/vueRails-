// define page routing in this file
import * as Vue from "vue";
import VueRouter from "vue-router";
// import page from ./components/pages
import Index from "./components/pages/Index.vue";
import About from "./components/pages/About.vue";
import Show from "./components/pages/Show.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: About },
  { path: "/books", component: Index },
  { path: "/books/1", component: Show },
];

const router = VueRouter.new({ routes: routes });
