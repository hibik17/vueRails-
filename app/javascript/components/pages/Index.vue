<template>
  <div class="container w-full min-h-screen mx-auto mt-5">
    <div class="grid grid-cols-3 gap-2">
      <!-- left content -->
      <div>
        <!-- user info -->
        <div>
          <p class="font-sans text-xl font-bold">User info</p>
          <UserInfo />
        </div>
        <!-- book form -->
        <div>
          <p class="font-sans text-xl font-bold">New Book</p>
          <BookForm />
        </div>
      </div>
      <!-- right content -->
      <div class="col-span-2">
        <p class="font-sans text-xl font-bold">Books</p>
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
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import BookForm from "../molecules/BookForm.vue";
import UserInfo from "../molecules/UserInfo.vue";

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
