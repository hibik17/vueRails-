<template>
  <div><router-view></router-view></div>
</template>

<script setup>
import About from "./components/pages/About.vue";
import Index from "./components/pages/Index.vue";
import Show from "./components/pages/Show.vue";

const routes = [
  { path: "/", component: About },
  { path: "/books", component: Index },
  { path: "/books/1", component: Show },
];

const router = VueRouter.new({ routes: routes });
Vue.use(VueRouter);
</script>
