<template>
  <div class="m-3">
    <div class="flex justify-center w-[80%]">
      <UserIcon width="w-[50px]" height="h-[80px]" />
    </div>
    <UserInfoTable :user="user" />
  </div>
</template>

<script setup>
import UserIcon from "../atoms/UserIcon.vue";
import UserInfoTable from "./UserInfoTable.vue";

const user = {
  name: "havana",
  introduction: "hello my name is havana",
};
</script>
