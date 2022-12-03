<template>
  <div class="w-[70%] min-h-screen mx-auto mt-5">
    <div class="grid grid-cols-3 gap-7">
      <div>
        <LeftContent />
      </div>
      <div class="col-span-2">
        <RightContent :books="books" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, onMounted, onUpdated, watch } from "vue";
import LeftContent from "../../organisms/LeftContent.vue";
import RightContent from "../../organisms/RightContent.vue";

const books = reactive([]);

watch((books) => {
  console.log("books data has changed");
  console.log(books);
  console.log("console.log done ...");
});

// execute when page was loaded at the first time
onMounted(() => {
  axios
    .get("/api/v1/books")
    .then((res) => {
      console.log(res.data);
      books.push(...res.data);
    })
    .catch((err) => alert(err.message))
    .finally(() => {
      console.log("data fetching has finished...");
    });
});

// execute when the books value has changed
onUpdated(() => {
  axios
    .get("/api/v1/books")
    .then((res) => {
      console.log(res.data);
      books.push(...res.data);
    })
    .catch((err) => alert(err.message))
    .finally(() => {
      console.log("data fetching has finished...");
    });
});
</script>
