<script setup lang="ts">
import { reactive, ref } from "vue";

const counter = reactive({
  count: 0,
});

const message = ref("Hello World!");
</script>

<template>
  <h1>Count: {{ counter.count }}</h1>
  <button @click="counter.count++">+1</button>

  <h1>{{ message }}</h1>
  <button @click="message += '!'">+!</button>
</template>
