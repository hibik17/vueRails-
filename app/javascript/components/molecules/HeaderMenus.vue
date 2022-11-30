<template>
  <div
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-cta"
  >
    <ul class="flex flex-col p-[10px] mt-2 md:flex-row md:space-x-8 md:mt-0">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link
          class="font-serif text-sm text-white"
          :to="{ path: menu.url }"
        >
          {{ menu.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import BookIcon from "../atoms/BookIcon.vue";

const menus = [
  {
    title: "Home",
    url: "/users/1",
  },
  {
    title: "About",
    url: "/",
  },
  {
    title: "Log in",
    url: "/books",
  },
  {
    title: "Sign in",
    url: "/books",
  },
];
</script>
