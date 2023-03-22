<script setup>
import scryfallStore from "../store/queryStore";
</script>

<template>
  <div class="container">
    <h3>{{ scryfallStore.scryfallCardObject.name }}</h3>
    <p>{{ scryfallStore.scryfallCardObject.mana_cost }}</p>
    <p>{{ scryfallStore.scryfallCardObject.oracle_text }}</p>
    <p>{{ scryfallStore.scryfallCardObject.flavor_text }}</p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

h3,
p {
  white-space: pre-line;
}

h3 {
  margin-bottom: 12px;
}

p {
  margin-bottom: 8px;
}
</style>
