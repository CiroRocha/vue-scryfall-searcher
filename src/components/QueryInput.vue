<script>
export default {
  methods: {
    debounceInput: debounce((e) => {
      scryfallStore.changeQuery(e?.target?.value);
    }),
  },
  unmounted() {
    scryfallStore.changeQuery("");
  },
};
</script>

<script setup>
import scryfallStore from "../store/queryStore";
import debounce from "../utils/debounce";
</script>

<template>
  <div class="container">
    <h3>Type your search:</h3>
    <input ref="queryInput" type="text" v-on:input="debounceInput" />
  </div>
</template>

<style scoped>
.container,
input {
  width: 100%;
}
.container h3 {
  margin-bottom: 8px;
}
</style>
