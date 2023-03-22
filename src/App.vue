<script></script>

<script setup>
import scryfallStore from "./store/queryStore";
import QueryInput from "./components/QueryInput.vue";
import MtgCardDisplay from "./components/MtgCardDisplay.vue";
</script>

<template>
  <div>
    <h1 style="color: white">{{ scryfallStore.scryfallQuery }}</h1>
    <QueryInput />
    <MtgCardDisplay />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
