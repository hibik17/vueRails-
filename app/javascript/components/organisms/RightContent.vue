<template>
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
</template>

<script setup>
const { books } = defineProps({
  books: Array | { title: String, body: String },
});
</script>
