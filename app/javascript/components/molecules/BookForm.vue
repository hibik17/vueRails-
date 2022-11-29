<template>
  <form>
    <div class="m-3">
      <label for="title">Title</label>
      <br />
      <input
        type="text"
        class="text-sm w-[80%] border rounded-sm border-slate-400 focus:border-blue-400"
      />
    </div>
    <div class="m-3">
      <label for="body">Body</label>
      <br />
      <textarea
        row="4"
        class="w-[80%] text-sm border rounded-sm border-slate-400 focus:border-blue-400"
      />
    </div>
    <div class="w-full ml-[20px]">
      <button
        @click=""
        class="px-2 py-1 mx-auto text-sm text-white duration-300 bg-green-600 rounded-sm hover:-translate-y-3 hover:bg-green-400"
      >
        Create Book
      </button>
    </div>
  </form>
</template>

<script setup></script>
