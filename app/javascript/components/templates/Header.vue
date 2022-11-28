<template>
  <nav class="px-1 sm:px-4 bg-slate-700 h-[50px]">
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
