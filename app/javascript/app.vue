<script setup>
import { ref, computed } from "vue";
import Header from "./components/templates/Header.vue";
import Footer from "./components/templates/Footer.vue";

// const routes = {
//   "/books": Index,
//   "/top": About,
// };

// const currentPath = ref(window.location.hash);

// window.addEventListener("hashchange", () => {
//   currentPath.value = window.location.hash;
// });

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || "/"] || "not found";
// });
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
