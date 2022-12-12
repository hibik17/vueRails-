<template>
  <div class="w-[70%] min-h-screen mx-auto mt-5">
    <div class="grid grid-cols-3 gap-7">
      <div>
        <LeftContent />
      </div>
      <div class="col-span-2">
        <b>{{ book.title }}</b>
        <b>{{ book.body }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import LeftContent from "../../organisms/LeftContent.vue";

const router = useRoute();
const book = ref({});

onMounted(() => {
  axios
    .get(`http://localhost:3000/api/v1/books/${router.params.id}`)
    .then((res) => {
      console.log(res.data)
      book.value = {
        title: res.data.title,
        body: res.data.body,
      }
    .catch((err) => console.log(err))
    .finally(() => console.log("data fetching done ..."));
});
</script>
