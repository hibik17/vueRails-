<template>
  <div class="w-[70%] min-h-screen mx-auto mt-5">
    <div class="grid grid-cols-3 gap-7">
      <div>
        <LeftContent />
      </div>
      <div class="col-span-2">
        <RightContent :data="book" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import LeftContent from "../../organisms/LeftContent.vue";
import RightContent from "../../organisms/RightContent.vue";

const router = useRoute();
const book = reactive([]);

onMounted(() => {
  axios
    .get(`http://localhost:3000/api/v1/books/${router.params.id}`)
    .then((res) => {
      console.log(res.data);
      book.push(...res.data);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("data fetching done ..."));
});
</script>
