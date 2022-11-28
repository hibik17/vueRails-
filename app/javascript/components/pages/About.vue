<template>
  <div class="w-[40%] mx-auto mt-4">
    <div class="m-2 text-xl font-semibold">
      welcome to
      <BookIcon width="w-5" height="w-5" />
      <span class="text-2xl font-bold">Bookers !!</span>
    </div>
    <div class="m-1 font-base semibold text-">
      In
      <BookIcon width="w-4" height="w-4" />
      Bookers,
    </div>
    <div class="text-sm text-gray-500">
      you can share and exchange your opinions , inpressions , and emotions
      about various books!
    </div>
    <!-- link buttons -->
    <AboutLinks />
  </div>
</template>

<script setup>
import BookIcon from "../atoms/BookIcon.vue";
import AboutLinks from "../molecules/AboutLinks.vue";
</script>
