<script setup>
import Header from "./components/templates/Header.vue";
import Footer from "./components/templates/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
