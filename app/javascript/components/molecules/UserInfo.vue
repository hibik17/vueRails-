<template>
  <div class="m-3">
    <div class="flex justify-center w-[80%]">
      <img src="../../assets/img/noimage.png" alt="Logo" class="w-10 h-10" />
    </div>
    <UserInfoTable :user="user" />
  </div>
</template>

<script setup>
import UserInfoTable from "./UserInfoTable.vue";

const user = {
  name: "havana",
  introduction: "hello my name is havana",
};
</script>
