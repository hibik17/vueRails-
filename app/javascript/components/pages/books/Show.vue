<template>
  <div>this is show page</div>
  <span>{{ book }}</span>
</template>

<script setup>
import axios from "axios";
import { computed } from "vue";

const getBook = computed(() => {
  const book = {};

  axios
    .get("/api/v1/books/1")
    .then((res) => {
      console.log(res.data);
      book.push(...res.data);
    })
    .catch((err) => alert(err.message))
    .finally(() => console.log("data fetching action done ...."));
  return book;
});
</script>
