<template>
  <div
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    id="navbar-cta"
  >
    <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link
          class="font-semibold text-white"
          v-for="(value, key) in menu"
          v-slot="{ href, isActive, navigate }"
          :to="{ value }"
        >
          <NavLink :active="isActive" :href="href" :navigate="navigate">
            {{ key }}
          </NavLink>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// define header menu array
const menus = [
  { home: "/home" },
  { About: "/about" },
  { Users: "/users" },
  { LogOut: "/logout" },
];
</script>
