<template>
  <div
    class="flex justify-center m-2"
    v-for="(link, index) in linkArray"
    :key="index"
  >
    <router-link
      v-for="(value, key) in link"
      v-slot="{ href, isActive, navigate }"
      :to="{ path: value }"
      class="w-[70%] mx-auto bg-green-400 my-2 rounded-sm text-center"
    >
      <NavLink
        :active="isActive"
        :href="href"
        :navigate="navigate"
        class="text-[60%] text-white"
      >
        {{ key }}
      </NavLink>
    </router-link>
  </div>
</template>

<script setup>
const linkArray = [{ Login: "/books" }, { Signup: "/" }];
</script>
