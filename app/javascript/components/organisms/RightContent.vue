<template>
  <p class="font-sans text-xl font-bold">Books</p>
  <table class="w-full border-collapse table-auto">
    <thead class="border-t border-b border-t-slate-200 border-b-slate-300">
      <tr>
        <th></th>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="d in data" :key="data.id">
        <td>
          <img
            src="../../assets/img/noimage.png"
            alt="user image"
            class="object-fill w-[50px] h-[60px]"
          />
        </td>
        <td>
          <router-link :to="`/books/${d.id}`" class="text-blue-400 underline">
            {{ d.title }}
          </router-link>
        </td>
        <td>{{ d.body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink } from "vue-router";

const { data } = defineProps({
  data: Array,
});
</script>
