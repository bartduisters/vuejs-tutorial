<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const upCount = () => {
  count.value++;
};
</script>

<template>
  <button @click="upCount">count is: {{ count }}</button>
  <div>
    <input @keyup="upCount" type="text" />
  </div>
</template>
