<script setup lang="ts">
import { ref } from "vue";

const titleClass = ref("title");

const makeBlue = () => {
  titleClass.value = "blue-title";
};
</script>

<template>
  <h1 :class="titleClass">Make me blue</h1>
  <button @click="makeBlue">Blue</button>
</template>

<style scoped>
.title {
  color: red;
}

.blue-title {
  color: blue;
}
</style>
