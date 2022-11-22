<template>
  <p>
    {{ message }}
  </p>

  <table>
    <thead>
      <tr>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, index) in books" :key="index">
        <td>{{ book.title }}</td>
        <td>{{ book.body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";

const books = reactive([]);
const message = "hello vue.js from vue";

axios
  .get("/api/v1/books")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => alert(err.message))
  .finally(() => console.log("data fetching has finished..."));
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
