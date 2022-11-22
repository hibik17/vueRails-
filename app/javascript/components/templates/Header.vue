<template>
  <nav class="bg-white px-2 sm:px-4 py-2 dark:bg-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <HeaderIcon />
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <p class="text-white font-semibold">Home</p>
          </li>
          <li>
            <p class="text-white font-semibold">About</p>
          </li>
          <li>
            <p class="text-white font-semibold">Users</p>
          </li>
          <li>
            <p class="text-white font-semibold">LogOut</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import HeaderIcon from "../atoms/HeaderIcon.vue";
</script>
