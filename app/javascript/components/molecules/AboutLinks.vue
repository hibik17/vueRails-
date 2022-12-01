<template>
  <div
    class="flex justify-center m-1"
    v-for="(link, index) in linkArray"
    :key="index"
  >
    <router-link
      :to="{ path: link.url }"
      class="w-[80%] mx-auto my-2 rounded-sm text-center text-sm text-white"
      :class="link.bg_color"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script setup>
const linkArray = [
  {
    title: "Log in",
    url: "/books",
    bg_color: "bg-blue-600",
  },
  {
    title: "Sign up",
    url: "/Sing_up",
    bg_color: "bg-green-600",
  },
];
</script>
