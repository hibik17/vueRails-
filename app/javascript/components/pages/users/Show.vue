<template>
  <div>{{ $route.params.id }}</div>
  <div>{{ user }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";

// fetch user_id from parameter
const route = useRoute();
const user_id = route.params.id;

// fetch user data by using axios
const {
  user,
} = async () => {
  await axios
    .get(`api/v1/users/${user_id}`)
    .then((res) => {
      console.log(res.data);
      user = res.data;
    })
    .catch((err) => alert(err.message))
    .finally(() => console.log("data fetching done ..."));
};
</script>
