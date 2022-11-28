<template>
  <div class="container w-full min-h-screen mx-auto mt-5">
    <div class="grid grid-cols-3 gap-10">
      <div>
        <LeftContent />
      </div>
      <!-- right content -->
      <div class="col-span-2">
        <RightContent :books="books" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import LeftContent from "../organisms/LeftContent.vue";
import RightContent from "../organisms/RightContent.vue";

let books = reactive([]);
axios
  .get("/api/v1/books")
  .then((res) => {
    console.log(res.data);
    books.push(...res.data);
  })
  .catch((err) => alert(err.message))
  .finally(() => console.log("data fetching has finished..."));
</script>
