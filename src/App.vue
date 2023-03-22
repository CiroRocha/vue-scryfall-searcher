<script></script>

<script setup>
import QueryInput from "./components/QueryInput.vue";
import MtgCardDisplay from "./components/MtgCardDisplay.vue";
import MtgCardInfo from "./components/MtgCardInfo.vue";
</script>

<template>
  <div class="content">
    <div class="title-container">
      <h1 class="application-title">Scryfall Searcher</h1>
    </div>
    <div class="search-container">
      <QueryInput class="query-input" />
      <div class="card-info">
        <MtgCardDisplay class="card-display" />
        <MtgCardInfo />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 48px;
}
.title-container {
  width: 100%;
  margin-bottom: 64px;
}
.card-display {
  margin-bottom: 12px;
}
.application-title {
  color: #ffffff;
  text-align: center;
}
.search-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
}
.card-info {
  border-radius: 16px;
  border: 2px solid #cccccc;
  width: 100%;
  min-height: 350px;
  padding: 16px;
}
@media (max-width: 768px) {
  .query-input {
    margin-bottom: 18px;
  }
}
@media (min-width: 768px) {
  .search-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 24px;
    align-items: flex-start;
  }
  .card-info {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
</style>
