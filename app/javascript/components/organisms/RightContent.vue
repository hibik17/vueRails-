<template>
  <p class="font-sans text-xl font-bold">Books</p>
  <table class="w-full border-collapse table-auto">
    <thead class="border-t border-b border-t-slate-200 border-b-slate-300">
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
