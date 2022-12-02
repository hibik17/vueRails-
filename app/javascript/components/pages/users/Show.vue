<template>
  <!-- <div>{{ user }}</div> -->
  <div>this is users show page</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { reactive, onMounted } from "vue";

// fetch user_id from parameter
const route = useRoute();
const user_id = route.params.id;

// fetch user data by using axios
// const user = reactive({});

// onMounted(() => async () => {
//   await axios
//     .get(`api/v1/users/${user_id}`)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => alert(err.message))
//     .finally(() => console.log("data fetching done ..."));
// });

axios
  .get(`api/v1/users/${user_id}`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => alert(err.message))
  .finally(() => console.log("data fetching done ..."));
</script>
