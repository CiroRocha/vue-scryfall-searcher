<script setup>
import scryfallStore from "../store/queryStore";
</script>

<template>
  <div class="card-container">
    <img
      ref="cardDisplay"
      class="mtg-card-display"
      v-bind:src="scryfallStore.scryfallCardObject?.image_uris?.png"
    />
  </div>
</template>

<style scoped>
.card-container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mtg-card-display {
  height: 300px;
  width: auto;
}
</style>
