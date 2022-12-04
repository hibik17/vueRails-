<template>
  <form @submit="createBook">
    <div class="m-3">
      <label for="title">Title</label>
      <br />
      <input
        type="text"
        class="text-sm w-[80%] border rounded-sm border-slate-400 focus:border-blue-400"
        v-model="formData.title"
      />
    </div>
    <div class="m-3">
      <label for="body">Body</label>
      <br />
      <textarea
        row="4"
        class="w-[80%] text-sm border rounded-sm border-slate-400 focus:border-blue-400"
        v-model="formData.body"
      />
    </div>
    <div class="w-full ml-[20px]">
      <button
        class="px-2 py-1 mx-auto text-sm text-white duration-300 bg-green-600 rounded-sm hover:-translate-y-3 hover:bg-green-400"
      >
        Create Book
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = reactive({ title: "", body: "" });

const createBook = async () => {
  // confirm the data of formData
  console.log(`title: ${formData.title}`);
  console.log(`body: ${formData.body}`);

  await axios
    .post("http://localhost:3000/api/v1/books", formData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("book create success");
      formData.title = "";
      formData.body = "";
      router.push("/books");
    });
};
</script>
