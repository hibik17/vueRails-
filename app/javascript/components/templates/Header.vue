<template>
  <nav class="px-2 py-1 bg-white sm:px-4 dark:bg-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <HeaderIcon />
      <HeaderMenus />
    </div>
  </nav>
</template>

<script setup>
import HeaderIcon from "../atoms/HeaderIcon.vue";
import HeaderMenus from "../molecules/HeaderMenus.vue";
</script>
