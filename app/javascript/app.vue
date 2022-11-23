<script setup>
import { ref, computed } from "vue";
import Index from "./components/pages/Index.vue";
import About from "./components/pages/About.vue";

const routes = {
  "/": Index,
  "/about": About,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || "not found";
});
</script>

<template>
  <a href="/about">Home</a> | <a href="/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>
