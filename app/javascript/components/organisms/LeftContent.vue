<template>
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
</template>

<script setup>
import UserInfo from "../molecules/UserInfo";
import BookForm from "../molecules/BookForm";
</script>
