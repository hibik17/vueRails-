<template>
  <div
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-cta"
  >
    <ul class="flex flex-col p-[10px] mt-2 md:flex-row md:space-x-8 md:mt-0">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link
          class="font-serif text-sm text-white"
          v-slot="{ href, isActive, navigate }"
          :to="{ path: menu.url }"
        >
          <NavLink :active="isActive" :href="href" :navigate="navigate">
            {{ menu.title }}
          </NavLink>
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
    url: "/home",
  },
  {
    title: "About",
    url: "/About",
  },
  {
    title: "Log in",
    url: "/LogIn",
  },
  {
    title: "Sign in",
    url: "/SignIn",
  },
];
</script>
