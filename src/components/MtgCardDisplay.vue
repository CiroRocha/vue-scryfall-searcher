<script setup>
import scryfallStore from "../store/queryStore";
</script>

<template>
  <img
    ref="cardDisplay"
    class="mtg-card-display"
    v-bind:src="scryfallStore.scryfallCardObject?.image_uris?.png"
  />
</template>

<style scoped>
.mtg-card-display {
  height: 300px;
  width: auto;
}
</style>
