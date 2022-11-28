<template>
  <div
    class="flex justify-center m-1"
    v-for="(link, index) in linkArray"
    :key="index"
  >
    <router-link
      v-slot="{ href, isActive, navigate }"
      :to="{ path: link.url }"
      class="w-[80%] mx-auto my-2 rounded-sm text-center"
      :class="link.bg_color"
    >
      <NavLink
        :active="isActive"
        :href="href"
        :navigate="navigate"
        class="text-[60%] text-white"
      >
        {{ link.title }}
      </NavLink>
    </router-link>
  </div>
</template>

<script setup>
const linkArray = [
  {
    title: "Log in",
    url: "/Log_in",
    bg_color: "bg-blue-600",
  },
  {
    title: "Sign up",
    url: "/Sing_up",
    bg_color: "bg-green-600",
  },
];
</script>
