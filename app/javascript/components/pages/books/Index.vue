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
import { reactive, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import LeftContent from "../../organisms/LeftContent.vue";
import RightContent from "../../organisms/RightContent.vue";

const router = useRoute();
let books = reactive([{}]);

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

onUpdated(() => {
  alert("updated");
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
