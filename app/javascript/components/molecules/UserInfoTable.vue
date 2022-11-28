<template>
  <table cellpadding="10" class="mt-3 text-sm">
    <thead>
      <tr class="py-3 border-t border-slate-200">
        <td>name</td>
        <td>{{ user.name }}</td>
      </tr>
      <tr class="py-3 border-t border-slate-200">
        <td>introduction</td>
        <td>{{ user.introduction }}</td>
      </tr>
    </thead>
  </table>
</template>

<script setup>
const { user } = defineProps({
  user: {
    name: String,
    introduction: String,
  },
});
</script>
