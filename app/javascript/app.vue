<template>
  <div class="w-full min-h-screen">
    <!-- header -->
    <nav class="w-full h-12 bg-gray-700">
      <div class="container mx-auto py-2 flex">
        <div>
          <p class="text-white font-bold font-mono">Bookers</p>
        </div>
        <div>
          <ul class="flex flex-end">
            users
          </ul>
        </div>
      </div>
    </nav>
    <div class="grid grid-cols-2 container mx-auto">
      <div class="cols">
        <form>
          <label for="title">Title</label>
          <input type="text" placeholder="title" />
          <label for="body">Body</label>
          <input type="text" placeholder="body" />
        </form>
      </div>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";

let books = reactive([]);
const message = "hello vue.js from vue";

axios
  .get("/api/v1/books")
  .then((res) => {
    console.log(res.data);
    books.push(...res.data);
  })
  .catch((err) => alert(err.message))
  .finally(() => console.log("data fetching has finished..."));
</script>
