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
  <input ref="queryInput" type="text" v-on:input="debounceInput" />
</template>
