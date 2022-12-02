<template>
  <div>this is show page</div>
  <span>{{ book }}</span>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const book = ref({ title: "", body: "" });

onMounted(() => {
  axios
    .get(`http://localhost:3000/api/v1/books/${router.params.id}`)
    .then((res) => {
      console.log(res);
      book.value.title = res.data.title;
      book.value.body = res.data.body;
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("data fetching done ..."));
});
</script>
